import Image from 'next/image'; // Image 컴포넌트 임포트
import styles from './AboutSection.module.scss'; // Import the SCSS module
import QnaBlock from './QnaBlock'; // Import the new QnaBlock component
import AnimatedText from '../AnimatedText/AnimatedText'; // Updated path

export default function AboutSection() {
  return (
    <div className={styles.aboutCard}>
      <div className={styles.profileSection}>
        <div className={styles.profileImageWrapper}>
          <Image 
            src="/file.svg" // 임시 프로필 이미지 경로
            alt="Profile Picture" 
            width={120} 
            height={120} 
            className={styles.profileImage} 
          />
        </div>
        <h3 className={styles.profileName}>전광일</h3>
        <p className={styles.profileTitle}>프론트엔드 개발자</p>
        <p className={styles.profileContact}>your-email@example.com</p>
      </div>
      <AnimatedText text="안녕하세요! 저는 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 전광일입니다." el="p" className={styles.introText} />
      <QnaBlock 
        q="프론트엔드를 선택한 이유는?" 
        a="사용자가 즉시 반응을 느끼는 인터페이스 제작에 큰 매력을 느껴서입니다." 
      />
      <QnaBlock 
        q="코드를 대하는 태도는?" 
        a="지속 가능한 구조, 명확한 의도, 직관적인 흐름을 중시합니다." 
      />
      <QnaBlock 
        q="새로운 기술을 배우고 동료들과 지식을 공유하는 것을 즐기며, 함께 성장하는 개발 문화를 지향합니다." 
        a="이 포트폴리오는 저의 경험과 기술, 그리고 열정을 담아낸 공간입니다." 
      />
    </div>
  );
}
