<script setup>
import { ref, reactive, nextTick } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

// router
const router = useRouter();

// auth
const authData = reactive({
  fname: "",
  lname: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});

const ruleFormRef = ref(null);

// Validation rules
const rules = {
  fname: [
    { required: true, message: "Please enter your Firstname", trigger: "blur" },
  ],
  email: [
    { required: true, message: "Please enter your email", trigger: "blur" },
    { type: "email", message: "Invalid email format", trigger: "blur" },
  ],
  phoneNumber: [
    {
      validator: (rules, value, callback) => {
        if (value && !/^[0-9]{11}$/.test(value)) {
          callback(new Error("Phone number must be 11 digits"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "Please enter your password", trigger: "blur" },
    {
      min: 6,
      message: "Password must be at least 6 characters",
      trigger: "blur",
    },
  ],
  confirmPassword: [
    {
      required: true,
      message: "Confirm password is required",
      trigger: "blur",
    },
    {
      validator: (rules, value, callback) => {
        if (authData.confirmPassword !== authData.password) {
          callback(new Error("Passwords do not match"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
};

// Signup function using Firebase Authentication
const signup = async () => {
  await nextTick(); // Ensure form ref is available

  if (!ruleFormRef.value) {
    console.error("Form ref not available");
    return;
  }

  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        console.log("User created:", userCredential.user);
        // Show a success message with Element Plus
        ElMessage({
          message: "Signup successful!",
          type: "success",
          showClose: true,
          duration: 3000,
        });
        router.push("./dashboardView.vue");
      } catch (error) {
        console.error("Signup error:", error.message);
        //  Show an error message
        ElMessage({
          message: error.message,
          type: "error",
          showClose: true,
          duration: 5000,
        });
      }
    } else {
      console.log("Validation failed.");
    }
  });
};
</script>

<template>
  <main class="bg-[#038F74] h-screen px-10 py-4">
    <section class="flex flex-row items-center justify-center md:h-[95vh]">
      <!-------------left flex---------------------------->
      <section class="w-1/2 rounded-l-xl hidden md:flex img-section">
        <div class="bg-black/60 !text-white px-8 py-3 w-full h-full">
          <img
            src="../assets/images/Skillboost-Africa-Logo.png"
            width="100px"
            alt="SkillBoost"
          />
          <h1 class="text-[40px] pt-32 leading-tight subpixel-antialiased">
            SkillBoost Africa CBT <br />
            Examination
          </h1>
          <p class="text-[16px] pt-2">
            Get started today and take your exams <br />
            with confidence!
          </p>
        </div>
        <!-- <img src="../assets/images/image2.png" alt="bg" width="400px"> -->
      </section>
      <!----------------------------------form -------------------------------->
      <section class="">
        <el-form
          ref="ruleFormRef"
          :model="authData"
          :rules="rules"
          @submit.prevent="signup(ruleFormRef)"
          class="bg-white p-10 h-full md:h-[85vh] md:rounded-r-xl rounded md:rounded-none"
        >
          <h2 class="text-3xl text-[#038F74] text-center font-bold pb-4">
            Register
          </h2>
          <!-------------------------------name-------------------------------->
          <el-form-item label-position="top" prop="fname">
            <el-row :gutter="10">
              <el-col :span="12">
                <el-input
                  type="text"
                  placeholder="First Name"
                  v-model="authData.fname"
                  size="large"
                  class=""
                />
              </el-col>
              <!--------------lname col ------------------------>

              <el-col :span="12">
                <el-input
                  type="text"
                  placeholder="Last Name"
                  v-model="authData.lname"
                  size="large"
                />
              </el-col>
            </el-row>
          </el-form-item>

          <!-----------email------------->
          <el-form-item label-position="top" prop="email">
            <el-input
              type="email"
              placeholder="Email Address"
              v-model="authData.email"
              size="large"
            />
          </el-form-item>
          <!-----------phone number------------->
          <el-form-item label-position="top" prop="phoneNumber">
            <el-input
              type="number"
              placeholder="Phone Number"
              v-model="authData.phoneNumber"
              size="large"
            />
          </el-form-item>
          <!-----------New Password------------->
          <el-form-item label-position="top" prop="password">
            <el-input
              type="password"
              placeholder="New Password"
              v-model="authData.password"
              size="large"
              show-password
            />
          </el-form-item>

          <!-----------Confirm Password------------->
          <el-form-item label-position="top" prop="confirmPassword">
            <el-input
              type="password"
              placeholder="Confirm Password"
              v-model="authData.confirmPassword"
              size="large"
              show-password
            />
          </el-form-item>

          <!---------------sign up btn ------------->
          <div class="mt-3">
            <el-button
              @click="signup(ruleFormRef)"
              mode="submit"
              class="!bg-[#038F74] text-2xl !text-white w-full mt-5 hover"
              size="large"
            >
              Sign Up
            </el-button>
          </div>

          <div class="text-center pt-2 text-sm">
            Already existing account?
            <router-link
              to="/login"
              class="!text-blue-700 text-center px-1 hover:underline"
            >
              Login
            </router-link>
          </div>
        </el-form>
      </section>
    </section>
  </main>
</template>

<style scoped>
.img-section {
  background-image: url(../assets/images/form-img.png);
  background-size: cover;
  background-position: center;
  width: 500px;
  height: 85vh;
  overflow: hidden;
}
</style>
