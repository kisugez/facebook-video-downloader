import VideoDownloader from "@/components/video-downloader"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 
            className="text-4xl font-bold text-[#1877F2] mb-2"
            style={{ fontFamily: 'var(--font-clarika), sans-serif', fontWeight: 700 }}
          >
            FB Video Downloader
          </h1>
          <p className="text-gray-600"            
          style={{ fontFamily: 'var(--font-clarika), sans-serif', fontWeight: 700 }}
          >Download your favorite Facebook videos easily</p>
        </div>
        <VideoDownloader />
      </div>
    </main>
  )
}
