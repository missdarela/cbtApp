<script setup>
import { ref, reactive} from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();
const router = useRouter();
const auth = getAuth();


const authData = reactive({
  fname: "",
  lname: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});

const ruleFormRef = ref(null);

// Validation rules (as defined earlier)
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

const signup = async () => {

  if (!ruleFormRef.value) {
    console.error("Form ref not available");
    return;
  }

  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          authData.email,
          authData.password
        );
        const user = userCredential.user;

        // Prepare extra user data
        const userData = {
          uid: user.uid,
          fname: authData.fname,
          lname: authData.lname,
          email: authData.email,
          phoneNumber: authData.phoneNumber,
          createdAt: new Date(),
        };

        // Save user data in Firestore and update Pinia state
        await authStore.saveUserData(user.uid, userData);

        ElMessage.success("Signup successful!");
        router.push("/login");
      } catch (error) {
        console.error("Signup error:", error.message);
        ElMessage.error(error.message);
      }
    } else {
      console.log("Validation failed.");
    }
  });
};


</script>

<template>
  <!-- Your sign-up form template goes here -->
  <main class="bg-[#038F74] h-screen px-10 py-4">
    <section class="flex flex-col md:flex-row items-center justify-center mx-auto md:w-[80%] w-[95%] h-auto md:h-[95vh]">
      <!-- Left Section for Image (Desktop) -->
      <section class="w-1/2 rounded-l-xl hidden md:flex img-section">
        <div class="bg-black/60 text-white px-8 py-3 w-full h-full">
          <img src="../assets/images/Skillboost-Africa-Logo.png" width="100px" alt="SkillBoost" />
          <h1 class="text-[40px] pt-32 leading-tight">
            SkillBoost Africa CBT <br /> Examination
          </h1>
          <p class="text-[16px] pt-2">
            Get started today and take your exams <br /> with confidence!
            <span>some text</span>
          </p>
        </div>
      </section>

      <!-- Sign-Up Form Section -->
      <section class="w-full md:w-1/2">
        <el-form
          ref="ruleFormRef"
          :model="authData"
          :rules="rules"
          @submit.prevent="signup"
          class="bg-white p-10 h-full md:h-[85vh] md:rounded-r-xl rounded md:rounded-none"
        >
          <h2 class="text-3xl text-[#038F74] text-center font-bold pb-4">Register</h2>

          <!-- First and Last Name -->
          <el-form-item label-position="top" prop="fname">
            <el-row :gutter="10">
              <el-col :span="12">
                <el-input type="text" placeholder="First Name" v-model="authData.fname" size="large" />
              </el-col>
              <el-col :span="12">
                <el-input type="text" placeholder="Last Name" v-model="authData.lname" size="large" />
              </el-col>
            </el-row>
          </el-form-item>

          <!-- Email -->
          <el-form-item label-position="top" prop="email">
            <el-input type="email" placeholder="Email Address" v-model="authData.email" size="large" />
          </el-form-item>

          <!-- Phone Number -->
          <el-form-item label-position="top" prop="phoneNumber">
            <el-input type="number" placeholder="Phone Number" v-model="authData.phoneNumber" size="large" />
          </el-form-item>

          <!-- Password -->
          <el-form-item label-position="top" prop="password">
            <el-input type="password" placeholder="New Password" v-model="authData.password" size="large" show-password />
          </el-form-item>

          <!-- Confirm Password -->
          <el-form-item label-position="top" prop="confirmPassword">
            <el-input type="password" placeholder="Confirm Password" v-model="authData.confirmPassword" size="large" show-password />
          </el-form-item>

          <!-- Sign Up Button -->
          <div class="mt-3">
            <el-button
              @click="signup"
              type="primary"
              class="!bg-[#038F74] text-2xl !text-white w-full mt-5 hover"
              size="large"
            >
              Sign Up
            </el-button>
          </div>

          <!-- Login Link -->
          <div class="text-center pt-2 text-sm">
            Already have an account?
            <router-link to="/login" class="!text-blue-700 hover:underline">
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
