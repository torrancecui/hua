import DayView from './DayView';
import PlantView from './PlantView';

export default function ContentView(){
    const showDayView = false;
    const contentView = showDayView ? <DayView></DayView> : <PlantView></PlantView>;

    return contentView;

}