import { PlantList } from "../types/PlantListType";
import DayView from "./DayView";
import PlantView from "./PlantView";

type Props = {
    plantList: PlantList;
};

export default function ContentView({ plantList }: Props) {
    const showDayView = true;
    const contentView = showDayView ? (
        <DayView plantList={plantList}></DayView>
    ) : (
        <PlantView plantList={plantList}></PlantView>
    );

    return contentView;
}
