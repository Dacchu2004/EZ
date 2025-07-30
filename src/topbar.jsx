import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TabPanel = ({ children }) => ( //in swiper, swipeSlide is already isolated so there's no need for value or index to control visibility
  <Box p={2}>
    <Typography>{children}</Typography>
  </Box>
);

const TopTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div style={{ position: 'absolute', top: '1px' }}>
      <AppBar position="static" style={{ backgroundColor: '#000000' }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Deposit" />
          <Tab label="Withdrawal" />
        </Tabs>
      </AppBar>

      <Swiper
        onSlideChange={(swiper) => setTabIndex(swiper.activeIndex)}
        onSwiper={(swiper) => swiper.slideTo(tabIndex)}
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={true}
      >
        <SwiperSlide>
          <TabPanel>Deposit Screen</TabPanel>
        </SwiperSlide>
        <SwiperSlide>
          <TabPanel>Withdrawal Screen</TabPanel>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopTabs;
