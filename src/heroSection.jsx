
import "./HeroSection.css";
import MenuBar from "./menuBar";




const images = [
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096391/io_hamster-run_eihbyj.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096391/io_lucky-mines_zolsjp.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096391/io_forest-arrow_km5wak.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096392/io_diver_vw7xe3.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096391/io_hot-mines_z99ih9.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096391/io_goblin-tower_fdug3d.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096391/io_jogo-do-bicho_qliflc.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096390/io_joker-poker_i3kxjv.png",

  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096390/io_new-hilo_u7ykyu.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096390/io_new-double_k2voqi.png",

  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096389/io_penalty-unlimited_iio14e.png",

  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096389/io_platform-mines_xz919c.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096389/io_aviafly_sbuxxn.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096389/io_chicken-road-two_nbhokc.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096389/io_ballonix_aft0te.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096389/io_plinko-aztec_cl7yvd.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096388/io_plinko_xjyxkx.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096388/io_robo-dice_qnrujl.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096388/io_roulette_egyszz.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096388/io_bubbles_pktqis.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096387/io_squid-game_yinnln.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096388/io_chicken-road_pppsmr.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096387/io_stairs_yjc2zs.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096387/io_coinflip_mcf7cj.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096387/io_crash_xeyvqx.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096386/io_sugar-daddy_xt4amy.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096387/io_cryptos_l8wros.png",
    "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096386/io_triple_omensy.png",
    "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096386/io_tower_d226iv.png",
  "https://res.cloudinary.com/dw4ytpinj/image/upload/v1753096387/io_coinflip_mcf7cj.png",


];

const HeroSection = () => {
  return (
    <div className="hero-section">
    
     
    
     <MenuBar/>
     
   
 
      <div className="scrollable-grid">
        
        {Array.from({ length: Math.ceil(images.length / 4) }).map(
          (_, rowIndex) => (
            <div className="image-row" key={rowIndex}>
              {images
                .slice(rowIndex * 4, rowIndex * 4 + 4)
                .map((imageSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imageSrc}
                    alt={`img-${rowIndex * 4 + imgIndex}`}
                  />
                ))}
            </div>
          )
        )}
      </div>
        
    </div>
  );
};

export default HeroSection;
