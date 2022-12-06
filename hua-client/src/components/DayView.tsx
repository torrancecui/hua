import { PlantList } from "../types/PlantListType";
import PlantViewRow from "./PlantViewRow";

type Props = {
    plantList: PlantList;
};

export default function DayView({ plantList }: Props) {
    return (
        <div>
            <h1>Day View</h1>
            {plantList.map(plant => {
                return <PlantViewRow plant={plant}></PlantViewRow>
            })}
        </div>
    );
}
