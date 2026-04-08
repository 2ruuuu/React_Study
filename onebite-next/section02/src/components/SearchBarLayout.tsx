import {ReactNode} from "react";

const SearchBarLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <div>임시 서치바</div>
      {children}
    </div>
  );
};

export default SearchBarLayout;
