import { API_BASE_URL, API_PATH } from '@constants/api';
import { SECTIONS_INFO, FEEDBACKS, APP_DESCRIPTIONS, DOWNLOAD_APP } from '@constants/baseConfig';
import { AppContext } from '@contexts/AppContext';
import { Layout } from '@layouts/';
import { useContext, useEffect } from 'react';
import { StyledSpecialtyGrid } from './SpecialtyGrid';
import { StyledDownloadApp } from './DownloadApp';
import { StyledAppDescription } from './AppDescription';
import { StyledFeedback } from './Feedback';
import { Banner } from './Banner';
import { PAGE_ROUTES } from '@constants/routers';
import { StyledBox } from '@components/Box';

const Homepage = () => {
  const context = useContext(AppContext);
  const { banners, setBanners, specialties, setSpecialties } = context;

  useEffect(() => {
    fetch(`${API_BASE_URL}/${API_PATH.BANNERS}`)
      .then((res) => res.json())
      .then((result) => {
        setBanners(result);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });

    fetch(`${API_BASE_URL}/${API_PATH.SPECIALTIES}`)
      .then((res) => res.json())
      .then((result) => {
        setSpecialties(result);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, [setBanners, setSpecialties]);

  return (
    <Layout>
      <StyledBox maxWidth="1440px" mLeft="auto" mRight="auto">
        <Banner data={banners} resource={`${PAGE_ROUTES.DOCTORS}`} />
        <StyledSpecialtyGrid
          data={specialties}
          title={SECTIONS_INFO.SPECIALTY.title}
          description={SECTIONS_INFO.SPECIALTY.description}
          resource={`${PAGE_ROUTES.SPECIALTIES}`}
        />
        <StyledAppDescription
          title={SECTIONS_INFO.APP_DESCRIPTION.title}
          description={SECTIONS_INFO.APP_DESCRIPTION.description}
          data={APP_DESCRIPTIONS}
        />
        <StyledDownloadApp
          description={SECTIONS_INFO.DOWNLOAD_APP.description}
          title={SECTIONS_INFO.DOWNLOAD_APP.title}
          iosAppLink={DOWNLOAD_APP.iosAppLink}
          androidAppLink={DOWNLOAD_APP.androidAppLink}
        />
        <StyledFeedback
          title={SECTIONS_INFO.FEEDBACK.title}
          description={SECTIONS_INFO.FEEDBACK.description}
          data={FEEDBACKS}
        />
      </StyledBox>
    </Layout>
  );
};

export default Homepage;
