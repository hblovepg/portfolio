type ProgressBarProps = {
  value: number;
};

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="progress">
      <div
        className="progress-bar bg-info"
        style={{ width: `${value}%` }}
      >
        {value}%
      </div>
    </div>
  );
};
