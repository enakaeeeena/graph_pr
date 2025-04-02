import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  const handleClick = () => setCount(count + 1);
  const handleReset = () => setCount(0);

  const getClickText = () => {
    if (count === 0) return t('clicks_zero');
    if (count === 1) return t('clicks_one');
    
    if (i18n.language === 'ru') {
      const lastDigit = count % 10;
      const lastTwoDigits = count % 100;
      
      if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
        return t('clicks_few', { count });
      }
      return t('clicks_many', { count });
    }
    
    return t('clicks_other', { count });
  };

  return (
    <div className="task-2 p-4 border rounded my-4">
      <h2 className="mb-4">Задание 2</h2>
      
      <div className="mb-3">
        <span className="me-2">{t('language')}:</span>
        <button
          className={`btn btn-sm me-2 ${i18n.language === 'en' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => i18n.changeLanguage('en')}
        >
          English
        </button>
        <button
          className={`btn btn-sm ${i18n.language === 'ru' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => i18n.changeLanguage('ru')}
        >
          Русский
        </button>
      </div>

      <div className="mb-3">
        <button 
          className="btn btn-success me-2" 
          onClick={handleClick}
        >
          {getClickText()}
        </button>
        <button 
          className="btn btn-danger" 
          onClick={handleReset}
        >
          {t('reset')}
        </button>
      </div>
    </div>
  );
}