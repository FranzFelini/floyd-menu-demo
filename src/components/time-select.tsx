import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TimeSelectProps {
  time: string;
  setTime: (time: string) => void;
}

const openingTime = 8;
const closingTime = 21;

const timeOptions: string[] = [];

for (let i = openingTime; i <= closingTime; i++) {
  timeOptions.push(String(i) + ":00");
  timeOptions.push(String(i) + ":30");
}

export const TimeSelect: React.FC<TimeSelectProps> = ({ }) => {
  return (
    <Select>
      <SelectTrigger className="w-full border-gray-500 border rounded-xl text-lg h-[50px]">
        <SelectValue placeholder="Select a time" />
      </SelectTrigger>
      <SelectContent>
        <div className="p-4 font-medium text-lg">
          <p>Select a time:</p>
        </div>

        {timeOptions.map((time) => (
          <SelectItem className="text-lg" key={time} value={time}>
            {time}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
