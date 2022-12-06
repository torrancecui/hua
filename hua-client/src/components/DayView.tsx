import { PlantList } from "../types/PlantListType";
import DayViewRow from "./DayViewRow";

type Props = {
    plantList: PlantList;
};

export default function DayView({ plantList }: Props) {
    return (
        <div>
            <h1>Day View</h1>
            {plantList.map(plant => {
                return <DayViewRow plant={plant}></DayViewRow>
            })}
        </div>
    );
}
