const cards = [
  {
    id: 1,
    img: `
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M56.8889 23.1111H42.6666C41.7236 23.1111 40.8193 23.4857 40.1525 24.1525C39.4857 24.8193 39.1111 25.7236 39.1111 26.6666V53.3333C39.1111 54.2763 39.4857 55.1807 40.1525 55.8475C40.8193 56.5143 41.7236 56.8889 42.6666 56.8889H56.8889C57.8319 56.8889 58.7362 56.5143 59.403 55.8475C60.0698 55.1807 60.4444 54.2763 60.4444 53.3333V26.6666C60.4444 25.7236 60.0698 24.8193 59.403 24.1525C58.7362 23.4857 57.8319 23.1111 56.8889 23.1111ZM56.8889 26.6666V46.2222H42.6666V26.6666H56.8889ZM42.6666 53.3333V49.0666H56.8889V53.3333H42.6666Z" fill="#232321"/>
    <path d="M35.5557 39.1111H7.11122V10.6666H49.7779V19.5555H53.3334V10.6666C53.3334 9.72365 52.9588 8.81928 52.292 8.15248C51.6252 7.48569 50.7209 7.11108 49.7779 7.11108H7.11122C6.16823 7.11108 5.26386 7.48569 4.59706 8.15248C3.93027 8.81928 3.55566 9.72365 3.55566 10.6666V39.1111C3.55566 40.0541 3.93027 40.9584 4.59706 41.6252C5.26386 42.292 6.16823 42.6666 7.11122 42.6666H35.5557V39.1111Z" fill="#232321"/>
    <path d="M35.5555 46.2222H15.9999C15.5284 46.2222 15.0763 46.4095 14.7429 46.7429C14.4095 47.0763 14.2222 47.5285 14.2222 48C14.2222 48.4715 14.4095 48.9237 14.7429 49.2571C15.0763 49.5905 15.5284 49.7778 15.9999 49.7778H35.5555V46.2222Z" fill="#232321"/>
    </svg>
    `,
    label: 'intuitive interface',
    desc: 'modern and easy to use application',
  },
  {
    id: 2,
    img: `
    <svg width="30" height="64" viewBox="0 0 30 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.0632 64C13.3596 54.0386 7.94047 50.2878 1.33201 47.8097C-0.864043 56.3321 5.19642 63.4236 13.0632 64Z" fill="#232321"/>
    <path d="M14.5585 19.5209C18.772 10.4993 15.2811 4.88531 10.1745 0C4.81429 6.96567 7.57052 15.8717 14.5585 19.5209Z" fill="#232321"/>
    <path d="M16.9355 44.6356C16.6452 34.6803 22.0582 30.9133 28.6708 28.4453C30.8587 36.9636 24.8023 44.0531 16.9355 44.6356Z" fill="#232321"/>
    <path d="M16.9355 59.9897C16.6452 50.0344 22.0582 46.2776 28.6708 43.8035C30.8587 52.3198 24.8023 59.4113 16.9355 59.9897Z" fill="#232321"/>
    <path d="M16.9355 29.2875C16.6452 19.3281 22.0582 15.5612 28.6708 13.087C30.8587 21.6135 24.8023 28.7009 16.9355 29.2875Z" fill="#232321"/>
    <path d="M13.0632 48.648C13.3596 38.6927 7.94047 34.9257 1.33201 32.4576C-0.864043 40.976 5.19642 48.0675 13.0632 48.648Z" fill="#232321"/>
    <path d="M13.0632 33.3C13.3596 23.3386 7.94047 19.5736 1.33201 17.0955C-0.864043 25.626 5.19642 32.7073 13.0632 33.3V33.3Z" fill="#232321"/>
    </svg>
    
    `,
    label: 'track nutrition',
    desc: 'stay on the right track with your diet',
  },
  {
    id: 3,
    img: `
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.0159 25.6003L24.2175 8.80672C24.1116 8.62518 24.0425 8.42456 24.0141 8.21631C23.9858 8.00806 23.9987 7.79627 24.0522 7.59302C24.1602 7.18254 24.4269 6.83179 24.7935 6.61792C25.1601 6.40405 25.5967 6.34458 26.0072 6.4526C26.4177 6.56062 26.7684 6.82728 26.9823 7.19392L37.7183 25.6003H55.0399C55.7189 25.6003 56.37 25.87 56.8501 26.3501C57.3302 26.8302 57.5999 27.4814 57.5999 28.1603V32.0003C57.6015 36.5724 56.3784 41.0615 54.0575 45.0008C51.7367 48.94 48.4031 52.1857 44.4031 54.4003H52.7999C53.2243 54.4003 53.6312 54.5689 53.9313 54.8689C54.2313 55.169 54.3999 55.576 54.3999 56.0003C54.3999 56.4247 54.2313 56.8316 53.9313 57.1317C53.6312 57.4317 53.2243 57.6003 52.7999 57.6003H11.1999C10.7756 57.6003 10.3686 57.4317 10.0685 57.1317C9.76847 56.8316 9.5999 56.4247 9.5999 56.0003C9.5999 55.576 9.76847 55.169 10.0685 54.8689C10.3686 54.5689 10.7756 54.4003 11.1999 54.4003H19.5967C15.5967 52.1857 12.2631 48.94 9.94225 45.0008C7.62145 41.0615 6.39828 36.5724 6.3999 32.0003V28.1603C6.3999 27.4814 6.66962 26.8302 7.14971 26.3501C7.6298 25.87 8.28095 25.6003 8.9599 25.6003H24.4159L14.6143 8.80672C14.5084 8.62518 14.4393 8.42456 14.4109 8.21631C14.3826 8.00806 14.3955 7.79627 14.449 7.59302C14.5025 7.38977 14.5955 7.19905 14.7227 7.03174C14.8499 6.86443 15.0088 6.72381 15.1903 6.61792C15.3718 6.51202 15.5725 6.44291 15.7807 6.41455C15.989 6.38618 16.2007 6.39911 16.404 6.4526C16.6072 6.50609 16.798 6.59908 16.9653 6.72628C17.1326 6.85347 17.2732 7.01238 17.3791 7.19392L28.1183 25.6003H34.0159ZM9.5999 28.8003V32.0003C9.5999 33.0883 9.6767 34.1571 9.8239 35.2003H54.1759C54.3231 34.1571 54.3999 33.0883 54.3999 32.0003V28.8003H9.5999ZM10.5279 38.4003C11.9047 43.0128 14.73 47.0593 18.5856 49.941C22.4413 52.8227 27.1224 54.3863 31.9359 54.4003H32.0639C36.8774 54.3863 41.5585 52.8227 45.4142 49.941C49.2698 47.0593 52.0951 43.0128 53.4719 38.4003H10.5279Z" fill="#232321"/>
    </svg>
    `,
    label: 'create recipes',
    desc: 'just let your imagination flow',
  },
];

export default cards;
