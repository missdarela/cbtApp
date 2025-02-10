<script setup>
import { ref, reactive } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

// Initialize Firebase authentication
const auth = getAuth();
const router = useRouter();

const loginAuth = reactive({
  email: "",
  password: "",
});

// Form reference
const loginRef = ref(null);

// Validation rules
const rules = {
  email: [
    { required: true, message: "Email field cannot be empty", trigger: "blur" },
    { type: "email", message: "Invalid email format", trigger: "blur" },
  ],
  password: [
    {
      required: true,
      message: "Password field cannot be empty",
      trigger: "blur",
    },
  ],
};

// Handle login
const login = async () => {
  if (!navigator.onLine) {
    ElMessage.error("No internet connection. Please check your network.");
    return;
  }

  // Validate form
  if (!loginRef.value) {
    console.error("Form reference is not available.");
    return;
  }

  loginRef.value.validate(async (valid) => {
    if (valid) {
      try {
        // Proceed to login directly
        const userCredential = await signInWithEmailAndPassword(
          auth,
          loginAuth.email,
          loginAuth.password
        );

        console.log("User logged in:", userCredential.user);
        ElMessage.success("Login successful!");
        router.push("/dashboard");
      } catch (error) {
        if (error.code === "auth/invalid-credential") {
          ElMessage.error("Incorrect email or password. Please try again.");
        } else {
          handleAuthError(error);
        }
      }
    }
  });
};

// Handle Firebase authentication errors
const handleAuthError = (error) => {
  console.error("Login error:", error.code || "Unknown error", error);

  switch (error.code) {
    case "auth/user-not-found":
      ElMessage.error("No account found with this email.");
      break;
    case "auth/wrong-password":
      ElMessage.error("Incorrect password. Please try again.");
      break;
    case "auth/user-disabled":
      ElMessage.error("This account has been disabled. Contact support.");
      break;
    case "auth/too-many-requests":
      ElMessage.error("Too many failed login attempts. Try again later.");
      break;
    case "auth/network-request-failed":
      ElMessage.error("Network error! Please check your internet connection.");
      break;
    default:
      ElMessage.error("An error occurred. Please try again.");
  }
};
</script>


<template>
  <main class="w-full h-screen">
    <section class="w-full h-full bg-black/30 flex justify-center items-center">
      <el-form
        ref="loginRef"
        :model="loginAuth"
        :rules="rules"
        @submit.prevent="login"
        class="bg-transparent backdrop-blur-xl p-12 w-[60%] md:w-[33.33vw] rounded-xl"
      >
        <!---------------------- Logo ------------------->
        <div class="pb-5 text-center flex flex-col justify-center items-center">
          <img
            src="../assets/images/Skillboost-Africa-Logo.png"
            alt="Skillboost Africa Logo"
            width="100px"
          />
          <h2 class="text-center text-white text-2xl py-5">Login</h2>
        </div>

        <!---------------------- Email ------------------->
        <el-form-item label-position="top" prop="email">
          <el-input
            type="email"
            placeholder="Email Address"
            v-model="loginAuth.email"
            size="large"
          />
        </el-form-item>

        <!---------------------- Password ------------------->
        <el-form-item label-position="top" prop="password">
          <el-input
            type="password"
            placeholder="Password"
            v-model="loginAuth.password"
            size="large"
            show-password
          />
        </el-form-item>

        <!---------------------- Login Button ------------------->
        <div class="mt-3">
          <el-button
            @click="login"
            mode="submit"
            class="!bg-[#038F74] text-2xl !text-white w-full mt-5 hover"
            size="large"
          >
            Login
          </el-button>
        </div>

        <!---------------------- Sign Up Link ------------------->
        <div class="text-center text-white pt-3 text-sm">
          Don't have an account?
          <router-link
            to="/"
            class="!text-blue-700 !text-md text-center px-1 hover:underline"
          >
            Sign up
          </router-link>
        </div>
      </el-form>
    </section>
  </main>
</template>

<style scoped>
main {
  background-image: url(../assets/images/computers.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
