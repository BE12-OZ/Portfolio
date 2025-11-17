import TimelineItem from '../TimelineItem/TimelineItem'; // Updated path
import timelineData from '../../../data/timeline.json';
import styles from './JourneyTimeline.module.scss'; // Import the SCSS module

type TimelineEvent = {
  date: string;
  title: string;
  company: string;
  description: string;
};

export default function JourneyTimeline() {
  const events: TimelineEvent[] = timelineData;

  return (
    <div className={styles.timelineContainer}>
      {/* Central line */}
      <div className={styles.centralLine}></div>
      
      {events.map((event, index) => (
        <TimelineItem key={index} event={event} isLeft={index % 2 !== 0} />
      ))}
    </div>
  );
}
