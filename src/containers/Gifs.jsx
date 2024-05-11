import React from 'react'
import { HtmlGif } from '../components'

const Gifs = ({ changeScene, isMobile }) => {
  return (
    <>
      {!isMobile && (
        <HtmlGif
          rot={[0, 0, 0]}
          pos={[-0.357182, 17.9479, 7.1]}
          scale={0.5}
          width={'720px'}
          height={'380px'}
          fileName={'1.mp4'}
          alt={'aboutme'}
          changeScene={changeScene}
          snum={1}
        />
      )}
      {!isMobile && (
        <HtmlGif
          rot={[0, Math.PI, 0]}
          pos={[-0.7, 5.05, -12.02]}
          width={'870px'} //870
          height={'785px'} //785
          fileName={'2.mp4'}
          alt={'projects'}
          changeScene={changeScene}
          snum={2}
        />
      )}
      <HtmlGif
        rot={[0, -Math.PI / 2, 0]}
        pos={[-10.78, 4.75, -0.45]}
        width={'458px'}
        height={'575px'}
        fileName={'3.mp4'}
        alt={'music'}
        changeScene={changeScene}
        snum={3}
      />
      {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 16.02, -2.18]}
          width={'525px'}
          height={'280px'}
          fileName={'4.mp4'}
          alt={'gif1'}
        />
      )}
      {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 16.02, 0.99]}
          width={'525px'}
          height={'280px'}
          fileName={'5.mp4'}
          alt={'gif2'}
        />
      )}
      {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 18.05, 0.83]}
          width={'475px'}
          height={'260px'}
          fileName={'7.mp4'}
          alt={'gif3'}
        />
      )}
      {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 20.16, 0.58]}
          width={'375px'}
          height={'295px'}
          fileName={'9.mp4'}
          alt={'gif4'}
        />
      )}
      {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 18.08, -1.848]}
          width={'375px'}
          height={'250px'}
          fileName={'6.mp4'}
          alt={'gif5'}
        />
      )}
      {!isMobile && (
        <HtmlGif
          rot={[0, -Math.PI / 2, 0]}
          pos={[-7.6, 20.23, -1.65]}
          width={'275px'}
          height={'320px'}
          fileName={'8.mp4'}
          alt={'gif6'}
        />
      )}
    </>
  )
}

export default Gifs
