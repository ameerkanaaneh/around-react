import image from "../images/image.jpg";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

export default function Main() {
  function handleEditAvatarClick() {
    document.querySelector(".popup_type_avatar").classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document.querySelector(".popup_type_profile").classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document.querySelector(".popup_type_card").classList.add("popup_opened");
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__overlay-container"
            onClick={handleEditAvatarClick}
          >
            <img src={image} alt="profile picture" className="profile__image" />
            <div className="profile__overlay"></div>
          </div>

          <div className="profile__info">
            <div className="profile__head">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <button
                type="button"
                className="profile__edit-button"
                src="./images/EditButton.png"
                onClick={handleEditProfileClick}
              ></button>
            </div>

            <p className="profile__interest">Explorer</p>
          </div>
        </div>

        <button
          type="button"
          className="profile__add-button"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="elements"></section>

      <template id="element">
        <div className="element">
          <button type="button" className="element__delete-button"></button>
          <img className="element__image" src=" " alt="" />
          <div className="element__box">
            <h2 className="element__name"></h2>
            <div className="element__likes-wrapper">
              <button type="button" className="element__like"></button>
              <p className="element__count">0</p>
            </div>
          </div>
        </div>
      </template>

      <PopupWithForm title="Edit profile" name="profile">
        <input
          className="popup__input popup__input_type_name"
          value=""
          type="text"
          id="name-input"
          name="name"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="name-input-error popup__input-error"></span>

        <input
          value=""
          className="popup__input popup__input_type_hobby"
          type="text"
          id="hobby-input"
          name="hobby"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="hobby-input-error popup__input-error"></span>

        <input className="popup__button" type="submit" value="Save" />
      </PopupWithForm>

      <PopupWithForm title="New place" name="card">
        <input
          className="popup__input popup__input_type_title"
          placeholder="Title"
          value=""
          type="text"
          id="title-input"
          required
          name="title"
          minLength="1"
          maxLength="30"
        />
        <span className="title-input-error popup__input-error"></span>

        <input
          value=""
          placeholder="Image link"
          className="popup__input popup__input_type_link"
          type="url"
          id="image-link-input"
          required
          name="image_link"
        />
        <span className="image-link-input-error popup__input-error"></span>

        <input className="popup__button" type="submit" value="Create" />
      </PopupWithForm>

      <PopupWithForm title="Are you sure?" name="confirm" modifier="confirm">
        <input
          className="popup__button popup__button_confirm"
          type="submit"
          value="Yes"
        />
      </PopupWithForm>

      <PopupWithForm title="Change profile picture" name="avatar">
        <input
          className="popup__input popup__input_type_url"
          placeholder="profile image link"
          // value=""
          type="url"
          id="url-input"
          required
          name="url"
        />
        <span className="url-input-error popup__input-error"></span>
        <input className="popup__button" type="submit" value="Save" />
      </PopupWithForm>
      <ImagePopup />
    </main>
  );
}
