import { getImageUrl } from "./utils"

export type ScientistProfile = {
  /**
   * 이름
   */
  name: string,
  /**
   * 전공
   */
  profession: string,
  /**
   * 수상횟수
   */
  awardCount: number,
  /**
   * 수상내역목록록
   */
  awardDetailList: Array<string>,
  /**
   * 발견
   */
  descovered: string,
  /**
   * 이미지ID
   */
  imageId: string,
  /**
   * 이미지너비
   */
  imageWidth: number,
  /**
   * 이미지높이
   */
  imageHeight: number
}

type ProfileProps = {
  profileProps: ScientistProfile
}

export const Profile = ({ profileProps }: ProfileProps) => {
  const { name, profession, awardCount, awardDetailList, descovered, imageId, imageWidth, imageHeight } = profileProps;

  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageWidth}
        height={imageHeight}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardCount} </b>
          ({awardDetailList?.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {descovered}
        </li>
      </ul>
    </section>
  )
}
