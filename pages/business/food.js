import Banner from '../../components/Banner';
import PageLayout from '../../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import banner from '../../static/images/banner_1.png';
import { useRouter } from 'next/router';

const imagePathArr = [
  '../static/images/enuf_product.jpeg',
  '../static/images/soon_product.png',
  '../static/images/mask.jpeg',
  '../static/images/tissue.jpeg',
  '../static/images/detergent.jpeg',
  '../static/images/food.jpeg',
];

const bannerObj = {
  img: banner,
  title: 'Foods',
};

const itemObj = [
  {
    img: imagePathArr[5],
    title: '식품류',
    titleEn: 'Food',
    category: '식품류',
    description: 'K-Food 및 세계 각국의 식품을 일본으로 수출합니다.',
    url: '/business/foods',
  },
];

const Paper = () => {
  const router = useRouter();
  console.log(router);
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Banner
          img={bannerObj.img}
          title={bannerObj.title}
          text={bannerObj.text}
        ></Banner>
        <div className='cosmetic_container'>
          <div className='dist_title'>
            <h1>식품류</h1>
          </div>
          <div className='dist_container'>
            {itemObj
              .filter((item) => {
                if (item.title === '식품류') return item;
              })
              .map((item) => {
                return (
                  <div className='dist_box'>
                    <div className='img_wrapper'>
                      <img src={item.img}></img>
                    </div>
                    <div className='text_wrapper'>
                      <span style={{ color: `${item.color}` }}>
                        {item.category}
                      </span>
                      <p>{item.description}</p>
                    </div>
                    <div className='detail_button'>
                      <a href={item.url} target='_self'>
                        <span>상세설명</span>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Paper;
