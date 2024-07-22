import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";
import ContactSection from "components/ContactSection";

function ContegoHygieneLinerPage(props) {
  return (
    <>
      <Meta title="Ưu đãi đặc biệt khi mua ghế Contégo 👉" />
      <HeroSection
        // title="Tại sao Contégo Hygiene Liner là lựa chọn hàng đầu của khách hàng tiệm nails?"
        title="CHỦ & THỢ NAIL NÓI GÌ VỀ CONTÉGO HYGIENE LINER ?"
        subtitle="Xem ngay video để biết thêm"
        strapline=""
        size="lg"
        bgColor="bg-white"
        bgImage=""
        bgImageOpacity={1}
        textColor=""
        video="https://player.vimeo.com/video/910539625?h=c7cf83a4be&autoplay=1&title=0&byline=0&portrait=0"
      />
      <ContactSection
        // title="TƯ VẤN MIỄN PHÍ"
        title="LỰA CHỌN FINANCE KHÔNG TIỀN LỜI & ƯU ĐÃI GIÁ ĐẶC BIỆT KHI MUA GHẾ CONTÉGO SPA"
        subtitle="Hãy để lại tên & số phone, chúng tôi sẽ liên lạc ngay để tư vấn miễn phí!"
        // strapline="Liên hệ ngay để nhận tư vấn miễn phí!"
        size="md"
        bgColor="bg-red-900"
        bgImage="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?crop=entropy&fit=crop&h=800&q=80&w=1280"
        bgImageOpacity={0.17}
        textColor="text-white"
      />
    </>
  );
}

export default ContegoHygieneLinerPage;
