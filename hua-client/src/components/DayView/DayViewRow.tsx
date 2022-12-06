import { Plant } from "../../types/PlantType"
import DayTrackerRow from "./DayTracker";

type Props = {
    plant: Plant,
}

export default function DayViewRow({
    plant,
}: Props) {
    return <div>
        <h2>{plant.nickname}</h2>
        <p>{plant.species}</p>
        <DayTrackerRow days={plant.daysToWater}></DayTrackerRow>
    </div>;
}