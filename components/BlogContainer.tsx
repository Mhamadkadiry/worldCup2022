import React from 'react'
import Blog from './Blog'

function BlogContainer() {
  return (
    <div className="max-w-7xl mx-auto mb-5 mt-5 p-2">
    <p className='font-extrabold text-[25px] lg:text-[40px] w-full border-l-2 bg-[#ffe2f1] border-b-2 border-[#9a074f] rounded-lg p-2 mb-5 mt-5 '>Blogs</p>
    <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4">
  <div className="md:row-span-2 rounded-lg"><Blog w={800} h={900} title="Best FIFA World Cup Blogs and Hashtags to Follow in 2022" background="https://thumbor.prod.vidiocdn.com/K9AfOUKhbZxZuHoEtWXk47cOwX0=/smart/filters:strip_icc():quality(70)/vidio-web-prod-user/uploads/user/avatar/93121328/PROFILEFIFAWORLCUP2022-1-b15a0c5712a23b12.png" link="https://blogging.org/top-fifa-world-cup-blogs/"/></div>
  <div className="..."><Blog w={800} h={450} title="Qatar is ready to welcome the world to celebrate a FIFA World Cup™ like no other" background="http://cdn29.us1.fansshare.com/images/worldcupopeningceremony/fifa-football-world-cup-opening-ceremony-images-hd-free-download-full-high-resolutions-1902082353.jpg" link="https://www.qatar2022.qa/en/home?utm_source=sa360&utm_medium=cpc&utm_campaign=ao-search2022&utm_content=en&gclid=Cj0KCQjwntCVBhDdARIsAMEwACkU-BMGcfzRBdKL-iK6udrTFC47rptsQYRqE8ian5Q5kFSBvQD7nGQaAngUEALw_wcB&gclsrc=aw.ds"/></div>
  <div className="..."><Blog w={800} h={450} title="Qatar 2022: Participants, groups, dates, tickets and more" background="https://cloudinary.fifa.com/transform/11efbf28-c08e-4a13-958f-78685fbb8a80/Qatar-2022-s-32-teams-graphic?tx=c_fill,ar_1.78,g_auto,q_auto,w_1455" link='https://www.fifa.com/fifaplus/en/articles/qatar-2022-all-qualified-teams-groups-dates-match-schedule-tickets-more'/></div>
</div>
    </div>
  )
}

export default BlogContainer