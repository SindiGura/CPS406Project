import React from 'react';

function HomePage(props) {

  async function handleSubmit() {
    
  }

  function showPay1() {
    document.getElementById("class1").classList.remove("hidden");
  }

  function hidePay1() {
    document.getElementById("class1").classList.add("hidden");
  }

  function showPay2() {
    document.getElementById("class2").classList.remove("hidden");
  }

  function hidePay2() {
    document.getElementById("class2").classList.add("hidden");
  }

  function showPay3() {
    document.getElementById("class3").classList.remove("hidden");
  }

  function hidePay3() {
    document.getElementById("class3").classList.add("hidden");
  }
  
  return (
    <section>
      <div className="relative items-center w-full px-5 py-40 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col">
            <div>
              <h2 className="text-4xl text-black text-center">Welcome, Name</h2>
            </div>
          </div>
          <form>
            <div className="mt-4 space-y-6">
              <div className="col-span-full">
                <label className="block mb-3 text-md font-medium text-gray-600" htmlFor="class1">
                  You are not currently attending Class 1, would you like to join?
                </label>
                <div class="flex items-center mb-4">
                  <input onClick={showPay1} id="class-1-yes" type="radio" value="" name="class-1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="class-1-yes" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                </div>
                <div class="flex items-center mb-4">
                  <input onClick={hidePay1}  id="class-1-no" type="radio" value="" name="class-1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="class-1-no" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <div id="class1" className="hidden">
                  <label className="block mb-3 text-md font-medium text-gray-600" htmlFor="class1">
                    Would you like to pay now or later?
                  </label>
                  <div class="flex items-center mb-4">
                    <input id="class-1-now" type="radio" value="" name="class-1-pay" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="class-1-now" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Now</label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input id="class-1-later" type="radio" value="" name="class-1-pay" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="class-1-later" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Later</label>
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-md font-medium text-gray-600" htmlFor="class2">
                  You are not currently attending Class 2, would you like to join?
                </label>
                <div class="flex items-center mb-4">
                  <input onClick={showPay2} id="class-2-yes" type="radio" value="" name="class-2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="class-2-yes" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                </div>
                <div class="flex items-center mb-4">
                  <input onClick={hidePay2} id="class-2-no" type="radio" value="" name="class-2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="class-2-no" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <div id="class2" className="hidden">
                  <label className="block mb-3 text-md font-medium text-gray-600" htmlFor="class2">
                    Would you like to pay now or later?
                  </label>
                  <div class="flex items-center mb-4">
                    <input id="class-2-now" type="radio" value="" name="class-1-pay" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="class-2-now" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Now</label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input id="class-2-later" type="radio" value="" name="class-1-pay" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="class-2-later" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Later</label>
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-md font-medium text-gray-600" htmlFor="class3">
                  You are not currently attending Class 3, would you like to join?
                </label>
                <div class="flex items-center mb-4">
                  <input onClick={showPay3} id="class-3-yes" type="radio" value="" name="class-3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="class-3-yes" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                </div>
                <div class="flex items-center mb-4">
                  <input onClick={hidePay3} id="class-3-no" type="radio" value="" name="class-3" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="class-3-no" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                </div>
                <div id="class3" className="hidden">
                  <label className="block mb-3 text-md font-medium text-gray-600" htmlFor="class3">
                    Would you like to pay now or later?
                  </label>
                  <div class="flex items-center mb-4">
                    <input id="class-3-now" type="radio" value="" name="class-1-pay" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="class-3-now" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Now</label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input id="class-3-later" type="radio" value="" name="class-1-pay" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="class-3-later" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Later</label>
                  </div>
                </div>
              </div>
              <div className="col-span-full">
                <button
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
