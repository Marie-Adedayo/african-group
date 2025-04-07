import Image from "next/image"
import Link from "next/link"

const newsData = [
  {
    id: 1,
    title: "Yorkshire rising: why the region's shed market has outperformed in 2025",
    date: "1 APRIL 2025",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UzMIHnCHF8hmqdpS76SVhaqp7jZadD.png",
    category: "NEWS",
    excerpt: "An in-depth analysis of Yorkshire's surprising market performance in the first quarter of 2025.",
    slug: "yorkshire-rising",
  },
  {
    id: 2,
    title: "A spotlight on the Bombolulu Educational Centre: Empowering girls in Kenya through education",
    date: "5 MARCH 2025",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yqafJXHqEqdipI2XZGLUklj30PAni4.png",
    category: "NEWS",
    excerpt: "How the Bombolulu Educational Centre is transforming lives through innovative educational programs.",
    slug: "bombolulu-educational-centre",
  },
  {
    id: 3,
    title: "Supporting education in Bombolulu, Kenya",
    date: "3 MARCH 2025",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yqafJXHqEqdipI2XZGLUklj30PAni4.png",
    category: "NEWS",
    excerpt: "Our ongoing commitment to educational initiatives in Bombolulu and the impact they're having.",
    slug: "supporting-education-bombolulu",
  },
]

export default function NewsSection() {
  return (
    <section className="bg-gray-100/80 px-12 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block bg-blue-100 px-3 py-1 mb-4">
          <span className="text-blue-700 text-xs font-medium uppercase tracking-wide">Company News</span>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-[#1e2a4a] text-4xl md:text-5xl font-bold">Latest News</h2>
          <Link
            href="/news"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded"
          >
            <span>View all</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((newsItem) => (
          <div key={newsItem.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <Image
                src={newsItem.imageUrl || "/placeholder.svg"}
                alt={newsItem.title}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-[#0f1e4e] text-white text-xs font-semibold uppercase px-2 py-1 m-4 rounded">
                {newsItem.category}
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{newsItem.date}</p>
              <h3 className="text-xl font-bold text-[#1e2a4a] mb-4">{newsItem.title}</h3>
              <Link
                href={`/news/${newsItem.slug}`}
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

