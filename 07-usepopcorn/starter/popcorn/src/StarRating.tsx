import { useState } from "react";
import styled from "styled-components";


const StarRating = ({
  maxRating = 10,
  color = "#ffda",
  size = 30,
  className,
  messages= []
}: {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?:string[]
}) => {


  const Container = styled.div.attrs<{ $size?: string }>((props) => ({
    // 指定静态类型
    type: "text",

    // 指定动态变量
    $size: props.$size || "1em",
  }))`
    width: 100%;
    display: flex;
    justify-content: center;
    align-item: center;

    margin: ${(props) => props.$size};
    padding: ${(props) => props.$size};
  `;

  const Letter = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => <span className={className}>{children}</span>;

  // 甚至支持这种子组件语法
  const RatingConatiner = styled(Letter)`
    color: ${color};
    font-weight: bold;
    align-item: center;
    line-height: ${size / 10};
    font-size: ${size / 1.2}px;
    margin-left: 0.5em;
  `;
  const StarContainer = styled.div`
    display: flex;
    // flex-direction: column;
    align-items: center;
  `;

  const [rating, setRating] = useState(1);
  const [tempRating, setTempRating] = useState(rating);
  const handleRating = (rating: React.SetStateAction<number>) => {
    setRating(rating);
  };
  return (
    <>
      <Container className={className}>
        <StarContainer>
          {Array.from({ length: maxRating }, (_, i) => (
            // i绑定的地方是迭代的时候
            // 有类似于map的功能, 但是不是map, 是Array.from
            <Star
              key={i}
              onRate={() => handleRating(i + 1)}
              // 通过rating来判断是否是满星的状态;
              // 如何做到那个星星跟着一起动? 但是点一下停下来?
              // 只有放上去的时候才有tempRating, 不放上去就移除这个变量(设置为0);
              // 点击的时候设置rating, 触摸的时候显示的是temp
              full={tempRating ? tempRating > i : rating > i}
              onHoverIn={() => setTempRating(i + 1)}
              onHoverOut={() => setTempRating(0)}
              color={color}
              size={size}
            ></Star>
          ))}
        </StarContainer>
        <RatingConatiner>
          <span>{tempRating || rating || 1}</span>
        </RatingConatiner>
      </Container>
    </>
  );
};

// 是箭头函数的写法;
const Star = ({
  onRate,
  full,
  onHoverIn,
  onHoverOut,
  color,
  size,
}: {
  onRate: () => void;
  full?: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color?: string;
  size?: number;
}) => {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };

  return (
    <span
      role="button"
      style={starStyle}
      //   反正就这么传上去的; onClick={onRate} onRate(()=>setRating(i+1))
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
};

export default StarRating;
