import React from 'react'
import Collect1 from '../../images/collect1.jpg'

function Collectionzz() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          color: 'var(--gray-scale-title-active, #000)',
          fontFamily: 'Tenor Sans',
          fontSize: '21px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '90px',
          letterSpacing: '4px',
          textTransform: 'uppercase'
        }}>Collection</h1>
        <div style={{ position: 'relative', maxWidth: '100%', width: '100%', height: 'auto' }}>
          <img
            src={Collect1}
            alt=''
            style={{ width: '100%', height: '100%' }}
          />
          <h2
            style={{
              position: 'absolute',
              top: '70%',
              left: '70%',
              transform: 'translate(-50%, -50%)',
              width: '216.372px',
              height: '490px',
              flexShrink: '0',
              color: 'var(--gray-scale-body, #333)',
              fontFamily: 'Bodoni Moda 28pt',
              fontSize: '162px',
              fontStyle: 'italic',
              fontWeight: '800',
              lineHeight: '244px',
              letterSpacing: '-31.5px',
              opacity: '0.5',
              mixBlendMode: 'multiply'
            }}
          >10</h2>
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '172.519px',
              height: '62.878px',
              flexShrink: '0',
              color: 'var(--gray-scale-off-white, #FCFCFC)',
              fontFamily: 'Bodoni Moda 28pt',
              fontSize: '41.865px',
              fontStyle: 'italic',
              fontWeight: '700',
              lineHeight: '62.797px'
            }}
          >October</div>
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '145.585px',
              height: '29.117px',
              flexShrink: '0',
              color: 'var(--gray-scale-off-white, #FCFCFC)',
              fontFamily: 'Tenor Sans',
              fontSize: '12.929px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '29.091px',
              letterSpacing: '6.061px',
              textTransform: 'uppercase'
            }}
          >collection</div>
        </div>
      </div>
    </>
  )
}

export default Collectionzz
