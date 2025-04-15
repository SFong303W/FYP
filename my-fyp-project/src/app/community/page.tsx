// src/app/community/page.tsx
import Image from 'next/image';

export default function CommunityPage() {
    return (
      <div className="w-full h-full p-6 text-white">
        <h1 className="text-2xl font-bold">Community Page</h1>
        <p>这里是学习路径分享社区！</p>
        <div>
          <h2 className="text-xl font-semibold mt-4">学习路径</h2>
          <ul className="list-disc pl-5">
            <li>前端开发</li>
            <li>后端开发</li>
            <li>数据科学</li>
            <li>机器学习</li>
          </ul>
        </div>
        <div className="text-center justify-center-safe bg-gray-800 p-4 mt-4 rounded-lg">

        <form className="max-w-md mx-auto">   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
      </form>
          <div className="flex items-center justify-center mb-4">
            <Image
              // src={user?.avatarUrl || '/images/default.png'}
              src="/images/default.png"
              alt="User Avatar"
              width={50}
              height={50}
              className="rounded-full object-cover bg-white shadow-md mr-2"
            />
            <p>Ali</p>
          </div>
          <h2 className="text-xl font-semibold">加入我们</h2>
          <h2 className="text-xl font-semibold">分享你的学习路径</h2>

        </div>
      </div>
    );
  }
  