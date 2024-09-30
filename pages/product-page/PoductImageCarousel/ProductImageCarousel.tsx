import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { CarouselDataType, ProductDetailType, ProductMediaType } from '@/models/modules/product/schemas';

function ProductImageCarousel(props: {
  data?: ProductDetailType | null | undefined;
  images?: any;
  setSelectedItemImage?: any;
}) {


  return (
    <>
      <Carousel
        height={200}
        slideSize="25%"
        slideGap="xl"
        withControls={false}
        slidesToScroll={3}
        align="start"
        mt={'24px'}
      >
        {props.data?.product_stock != null ? 
        props.data?.product_stock[0]?.product_media?.map((item: ProductMediaType, id: number) => {
          return (
            <Carousel.Slide key={id}>
              {item.media_type == CarouselDataType.IMAGE && (
                <Image
                  sx={{ cursor: 'pointer' }}
                  onClick={() =>
                    props.setSelectedItemImage(() => ({
                      mediaType: item.media_type,
                      mediaUrl: item.image,
                    }))
                  }
                  // mt={'24px'}
                  width={'100%'}
                  maw={'100px'}
                  src={item.image}
                  alt="product_image"
                />
              )}

              {/* {(item.media_type == 'Video' && item.video != null) || (item.media_type == "Url" && item.video_url ) && */}
              {(item.media_type == CarouselDataType.VIDEO || item.media_type ==  CarouselDataType.URL ) && (
                <video
                  // preload="none"
                  style={{
                    maxWidth: '100px',
                    width: '100%',
                  }}
                  onClick={() =>
                    props.setSelectedItemImage(() => ({
                      mediaType: item.media_type,
                      mediaUrl: item.video?item.video:item.video_url,
                    }))
                  }
                  // poster="https://media.istockphoto.com/id/157604241/photo/brown-rabbit-standing-up.jpg?s=1024x1024&w=is&k=20&c=XPXBabvCKczV0V2VcGqo7-pY7Zh4fYOE3YukB0lVpVY="
                >
                  {item.video != null && <source src={item.video} type="video/mp4" />}
                  {item.video_url != null && <source src={item.video_url} type="video/mp4" />}
                </video>
              )}
            </Carousel.Slide>
          );
        })
        : null
      }

        {/* ...other slides */}
      </Carousel>
    </>
  );
}

export default ProductImageCarousel;
