<template>
   <div class="login">
         <el-form
            label-position="top"
            class="login-form"
            label-width="80px"
            :model="formDate">
            <h2>用户登录</h2>
            <el-form-item label="用户名">
                <el-input v-model="formDate.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input @keyup.enter.native='handlelogin' v-model="formDate.password"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="handlelogin" class="btn">登录</el-button>
            </el-form-item>
        </el-form>
   </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      formDate: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    handlelogin() {
      axios
        .post('http://localhost:8888/api/private/v1/login', this.formDate)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.$message.success(res.data.meta.msg);
            var token = res.data.data.token;
            sessionStorage.setItem('token', token);
            this.$router.push('/home');
          }
        })
        .catch((err) => {
          console.log(err);
          this.$message.error(err.data.meta.msg);
        });
    }
  }

};

</script>

<style >
    .login {
        background-color: #324152;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .login .login-form {
        width : 400px;
        margin: 0 auto;
        background-color: #fff;
        padding: 30px;
        border-radius: 5px;
    }
    .login .login-form .btn {
        width:100%;
    }

</style>
