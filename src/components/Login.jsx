import React from 'react';

function Login() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Đăng nhập</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            CMT/CCCD/MSV
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Nhập CMT/CCCD/MSV"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Mật khẩu
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Nhập mật khẩu"
                        />
                    </div>
                    <div className="flex   
 items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                            type="submit"
                        >
                            Đăng nhập
                        </button>

                        <a href="#" className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800">
                            Quên mật khẩu?
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 mt-4">
                    Bạn chưa có tài khoản? <a href="#" className="text-blue-500 hover:text-blue-800">
                        Đăng ký nội trú
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;