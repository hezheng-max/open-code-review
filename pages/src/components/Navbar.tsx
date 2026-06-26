import React from 'react';
import { useTranslation } from '../i18n';
import socialIcon from '../assets/icons/svg_a1bab8ca.svg';
import logoIcon from '../assets/images/容器-4_75a16b.svg';
import externalLinkIcon from '../assets/icons/svg_ffadf990.svg';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav
      style={{
        width: '100%',
        height: 72,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid rgba(61,61,61,0.6)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1440,
          height: 72,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 32px',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <img src={logoIcon} alt="logo" style={{ width: 24, height: 24 }} />
          <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>
            Open Code Review
          </span>
        </div>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#features" style={{ padding: '8px 16px', borderRadius: 8 }}>
            <span style={{ color: '#FFFFFF', fontSize: 14, lineHeight: '20px' }}>
              {t('navbar.features')}
            </span>
          </a>
          <a href="#benchmark" style={{ padding: '8px 16px', borderRadius: 8 }}>
            <span style={{ color: '#FFFFFF', fontSize: 14, lineHeight: '20px', opacity: 0.6 }}>
              {t('navbar.benchmark')}
            </span>
          </a>
          <a href="#quickstart" style={{ padding: '8px 16px', borderRadius: 8 }}>
            <span style={{ color: '#FFFFFF', fontSize: 14, lineHeight: '20px', opacity: 0.6 }}>
              {t('navbar.quickstart')}
            </span>
          </a>
          <a
            href="https://github.com/nicepkg/ocr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <span style={{ color: '#FFFFFF', fontSize: 14, lineHeight: '20px', opacity: 0.6 }}>
              {t('navbar.docs')}
            </span>
            <img src={externalLinkIcon} alt="" style={{ width: 18, height: 18 }} />
          </a>
          <a
            href="https://github.com/nicepkg/ocr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 16px', borderRadius: 8 }}
          >
            <span style={{ color: '#FFFFFF', fontSize: 14, lineHeight: '20px', opacity: 0.6 }}>
              {t('navbar.blog')}
            </span>
            <img src={externalLinkIcon} alt="" style={{ width: 18, height: 18 }} />
          </a>
        </div>

        {/* Right section */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 16 }}>
          <button
            onClick={toggleLanguage}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.6,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              color: '#FFFFFF',
              fontSize: 14,
              fontWeight: 500,
              width: 20,
              height: 20,
            }}
            title={language === 'en' ? 'Switch to Chinese' : '切换为英文'}
          >
            {language === 'en' ? 'En' : '中'}
          </button>
          <a
            href="https://github.com/alibaba/open-code-review"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', opacity: 0.6 }}
          >
            <img src={socialIcon} alt="Social" style={{ width: 20, height: 20 }} />
          </a>
          <a
            href="#quickstart"
            style={{
              height: 32,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 6,
              padding: '4px 12px',
              background: '#ffffff',
              border: '1px solid #EBEBEB',
              borderRadius: 6,
              color: 'rgba(0,0,0,0.77)',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            {t('navbar.getStarted')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
