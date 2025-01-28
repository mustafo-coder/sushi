import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <div className="max-w-[600px] w-full text-center">
        <div className="relative w-full aspect-[2/1] mb-8">
          {/* The 404 numbers and illustration container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Left 404 number */}
            <div className="text-[120px] md:text-[200px] font-light text-[#e85d3d]/10 leading-none">
              4
            </div>

            {/* Center illustration */}
            <div className="w-[180px] md:w-[220px] h-[180px] md:h-[220px] relative mx-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7jOdDpX8ZhcTW5ldaK1tTrmFf0wxFT.png"
                alt="404 Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Right 404 number */}
            <div className="text-[120px] md:text-[200px] font-light text-[#e85d3d]/10 leading-none">
              4
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
          Страница не найдена
        </h1>

        <p className="text-gray-600 mb-8 max-w-[400px] mx-auto">
          Извините, но страницу, которую Вы пытаетесь найти - не существует.
          Предлагаем Вам перейти на Главную страницу
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
