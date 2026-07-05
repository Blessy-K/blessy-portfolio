import { portfolio } from "../../data/portfolio";

function StatusCard() {
  const { status } = portfolio;

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-8 shadow-lg">
      <p className="text-sm uppercase tracking-[0.3rem] text-blue-500 font-semibold">
        Currently
      </p>

      <div className="mt-8 space-y-6">

        <div>
          <p className="text-zinc-500 text-sm">Education</p>
          <h3 className="mt-1 text-lg font-semibold">
            {status.education}
          </h3>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">Focus</p>
          <h3 className="mt-1 text-lg font-semibold">
            {status.focus}
          </h3>
        </div>

        <div>
          <p className="text-zinc-500 text-sm">Availability</p>
          <h3 className="mt-1 text-lg font-semibold text-green-400">
            {status.availability}
          </h3>
        </div>

      </div>
    </div>
  );
}

export default StatusCard;