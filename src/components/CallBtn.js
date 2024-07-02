// import phoneIcon from '../../images/telephone.png';

function CallButton() {
  return (
    <div className="fixed bottom-3 w-full md:invisible">
      <button className="bg-red-700 px-4 py-3 rounded-r-lg">
        <a
          href="tel:7148958865"
          className="flex gap-2 items-center text-white text-base"
        >
          {/* <img src={phoneIcon} alt="" className="text-white"/> */}
          <div className="animate-bounce">
          <svg
            className="h-8 w-8 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />{' '}
            <path d="M15 7a2 2 0 0 1 2 2" /> <path d="M15 3a6 6 0 0 1 6 6" />
          </svg>
          </div>
          Gọi Ngay | 714-895-8865
        </a>
      </button>
    </div>
  );
}

export default CallButton;
<svg
  class="h-8 w-8 text-white"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  {' '}
  <path stroke="none" d="M0 0h24v24H0z" />{' '}
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />{' '}
  <path d="M15 7a2 2 0 0 1 2 2" /> <path d="M15 3a6 6 0 0 1 6 6" />
</svg>;