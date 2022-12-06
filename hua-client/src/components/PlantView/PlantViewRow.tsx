import { Plant } from "../../types/PlantType"

type Props = {
    plant: Plant
}

export default function PlantViewRow({
    plant,
}: Props) {
    return <div>
        <p>{plant.nickname}</p>
        <p>{plant.species}</p>
        <p>{plant.daysToWater}</p>
    </div>;
}