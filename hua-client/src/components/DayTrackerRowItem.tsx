import DayOfWeek from "../types/DayOfWeek"

type Props = {
    dayName: DayOfWeek,
    shouldWater: boolean,
}

export default function DayTrackerRowItem(
    { dayName, shouldWater }: Props
) {
    const shouldWaterLabel = shouldWater ? 'yes' : 'no';
    return <div>
        <h3>{dayName}</h3>
        <p>{shouldWaterLabel}</p>
    </div>;
}