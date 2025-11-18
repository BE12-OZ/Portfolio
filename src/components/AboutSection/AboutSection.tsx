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
            src="/profile/profile-1.jpg" // 프로필 이미지 경로
            alt="Profile Picture" 
            width={120} 
            height={120} 
            className={styles.profileImage} 
          />
        </div>
        <h3 className={styles.profileName}>전광일</h3>
        <p className={styles.profileTitle}>풀스택 개발자</p>
        <p className={styles.profileContact}>dhwmzheld6470@gmail.com</p>
      </div>
      <QnaBlock
        q="✨디자인 감성과 개발 로직을 결합하는 이유는?"
        a="아이디어를 더 편리하고 직관적으로 구현하고 싶다는 고민에서 출발했습니다.
           디자인을 통해 사용자 경험을 다듬어왔고, 이제는 코드를 통해 직접 해결책을 만들어내고 있습니다."
      />
      <QnaBlock
        q="✨디자인 경험이 개발에 어떤 영향을 줄까요?"
        a="복잡한 문제를 구조화하는 능력,
           사용자가 무엇을 불편해하는지 읽어내는 감각,
           그리고 디테일을 놓치지 않는 시각적 완성도까지
           모두 개발 과정에서 유용한 무기가 되고 있습니다."
      />
      <QnaBlock
        q="✨왜 풀스택 개발을 목표로 하나요?"
        a="프론트에서는 감성을 담은 UI/UX를 구현하고 백엔드에서는 서비스의 골격을 설계하며,
           보이는 것과 보이지 않는 것을 모두 이해하는 개발자가 되고자 하기 때문입니다."
      />
      <QnaBlock
        q="✨어떤 기술들을 다루고 있나요?"
        a="• Frontend: React, JavaScript, HTML/CSS
           • Backend: Python(Django,DRF), Node.js
           • Database: SQL · NoSQL
           • Virtualization Platform: Docker

           서비스 전반의 흐름을 스스로 설계할 수 있는 역량을 쌓고 있습니다."
      />
      <QnaBlock
        q="✨궁극적으로 만들고 싶은 것은?"
        a="사용자가 쉽게 다가갈 수 있는 직관적이고 아름다운 인터페이스,
           보이지 않는 데이터의 가치를 시각적으로 드러내는 서비스,
           그리고 일상을 더 편리하게 바꾸는 작은 혁신들입니다."
      />
    </div>
  );
}
