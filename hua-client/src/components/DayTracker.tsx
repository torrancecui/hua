import DayOfWeek from "../types/DayOfWeek"
import DayTrackerRowItem from "./DayTrackerRowItem";

type Props = {
    days: Array<DayOfWeek>,
}

export default function DayTrackerRow({ days }: Props) {
    const waterOnSunday = days.includes(DayOfWeek.SUNDAY);
    const waterOnMonday = days.includes(DayOfWeek.MONDAY);
    const waterOnTuesday = days.includes(DayOfWeek.TUESDAY);
    const waterOnWednesday = days.includes(DayOfWeek.WEDNESDAY);
    const waterOnThursday = days.includes(DayOfWeek.THURSDAY);
    const waterOnFriday = days.includes(DayOfWeek.FRIDAY);
    const waterOnSaturday = days.includes(DayOfWeek.SATURDAY);

    return <div>
        <DayTrackerRowItem dayName={DayOfWeek.SUNDAY} shouldWater={waterOnSunday}></DayTrackerRowItem>
        <DayTrackerRowItem dayName={DayOfWeek.MONDAY} shouldWater={waterOnMonday}></DayTrackerRowItem>
        <DayTrackerRowItem dayName={DayOfWeek.TUESDAY} shouldWater={waterOnTuesday}></DayTrackerRowItem>
        <DayTrackerRowItem dayName={DayOfWeek.WEDNESDAY} shouldWater={waterOnWednesday}></DayTrackerRowItem>
        <DayTrackerRowItem dayName={DayOfWeek.THURSDAY} shouldWater={waterOnThursday}></DayTrackerRowItem>
        <DayTrackerRowItem dayName={DayOfWeek.FRIDAY} shouldWater={waterOnFriday}></DayTrackerRowItem>
        <DayTrackerRowItem dayName={DayOfWeek.SATURDAY} shouldWater={waterOnSaturday}></DayTrackerRowItem>
    </div>;

}