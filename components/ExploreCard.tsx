import Image from "next/image"

function ExploreCard({ key, img, location, distance }: any) {
  return (
      <div key={key} data-test='components-ExploreCard' className='exploreCard'>
          <div className='relative h-16 w-16'>
              <Image
                  src={img}
                  alt={location}
                  layout='fill'
                  className="rounded-lg"
              />
          </div>
          <div>
              <h2>{location}</h2>
              <h3 className="text-gray-500">{distance}</h3>
          </div>
      </div>
  )
}

export default ExploreCard