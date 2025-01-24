import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <div className="max-w-[1200px] w-full text-center">
        <div className="relative w-full flex items-center justify-center">
          <div className="relative w-[860px] h-[312px]">
            <Image
              src="/404.png"
              alt="404 Illustration"
              width={600}
              height={312}
              className="object-contain mx-auto"
              priority
            />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-medium mb-2 text-gray-800">Страница не найдена</h1>

        <p className="text-gray-600 mb-6 max-w-[400px] mx-auto">
          Извините, но страницу, которую Вы пытаетесь найти - не существует. Предлагаем Вам перейти на Главную страницу
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[#e85d3d] text-white rounded-md hover:bg-[#d54d2d] transition-colors"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
