function AllProducts(props: any) {
  return (
    <>
      <div className="all_products">
        <div className="category_title">
          <h1>Recommandations</h1>
          <div className="category_underline">
            <span></span>
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.143 18.6158L34.8613 15.2631C34.559 14.7874 34.1507 14.3882 33.6683 14.0968C33.1859 13.8054 32.6426 13.6297 32.0809 13.5834C32.4447 13.153 32.7039 12.6442 32.8383 12.0969C32.9727 11.5496 32.9786 10.9786 32.8555 10.4287L32.1016 6.44431C32.0758 6.30907 32.0098 6.18476 31.9122 6.08761C31.8147 5.99046 31.6901 5.925 31.5547 5.89978L27.5703 5.14587C27.0204 5.02256 26.4494 5.02832 25.902 5.16271C25.3547 5.29711 24.8459 5.55648 24.4156 5.92048C24.3696 5.35869 24.1939 4.81522 23.9025 4.33273C23.611 3.85024 23.2118 3.44185 22.736 3.13962L19.3844 0.858374C19.2711 0.781087 19.1372 0.739746 19 0.739746C18.8629 0.739746 18.7289 0.781087 18.6156 0.858374L15.2629 3.1408C14.7873 3.4431 14.3881 3.85145 14.0967 4.33385C13.8052 4.81625 13.6295 5.35958 13.5832 5.92127C13.1529 5.55729 12.6442 5.29793 12.0968 5.16354C11.5495 5.02915 10.9785 5.02337 10.4285 5.14666L6.44415 5.90056C6.30921 5.92616 6.1851 5.99179 6.08797 6.08891C5.99085 6.18604 5.92522 6.31015 5.89962 6.44509L5.14572 10.4295C5.02264 10.9794 5.02853 11.5503 5.16292 12.0975C5.2973 12.6447 5.55654 13.1534 5.92033 13.5838C5.35857 13.63 4.81516 13.8057 4.33269 14.0971C3.85022 14.3885 3.44181 14.7877 3.13947 15.2635L0.858216 18.6154C0.780723 18.7286 0.739258 18.8626 0.739258 18.9998C0.739258 19.137 0.780723 19.271 0.858216 19.3842L3.13947 22.7369C3.44187 23.2125 3.8503 23.6117 4.33276 23.9031C4.81522 24.1945 5.3586 24.3703 5.92033 24.4166C5.55653 24.847 5.29729 25.3557 5.16291 25.903C5.02853 26.4503 5.02264 27.0213 5.14572 27.5713L5.89962 31.5556C5.92522 31.6906 5.99085 31.8147 6.08797 31.9118C6.1851 32.0089 6.30921 32.0746 6.44415 32.1002L10.4285 32.8541C10.6974 32.9053 10.9704 32.9315 11.2442 32.9322C12.1013 32.948 12.9342 32.6467 13.5828 32.0861C13.6295 32.6473 13.8055 33.19 14.0969 33.6718C14.3883 34.1536 14.7872 34.5615 15.2625 34.8635L18.6145 37.1447C18.7277 37.222 18.8617 37.2634 18.9988 37.2634C19.136 37.2634 19.27 37.222 19.3832 37.1447L22.736 34.8631C23.2112 34.5612 23.6102 34.1534 23.9016 33.6717C24.193 33.1899 24.3689 32.6472 24.4156 32.0861C25.064 32.6478 25.897 32.95 26.7547 32.9349C27.0285 32.9342 27.3017 32.9081 27.5707 32.8568L31.5551 32.1029C31.6904 32.0777 31.815 32.0122 31.9126 31.9151C32.0102 31.8179 32.0762 31.6936 32.102 31.5584L32.8559 27.574C32.979 27.0241 32.9731 26.4532 32.8387 25.906C32.7043 25.3587 32.4451 24.85 32.0813 24.4197C32.643 24.3735 33.1864 24.1978 33.6689 23.9063C34.1514 23.6149 34.5598 23.2157 34.8621 22.74L37.1434 19.3881C37.2216 19.2745 37.2634 19.1398 37.2633 19.0019C37.2633 18.864 37.2213 18.7293 37.143 18.6158ZM27.3203 6.48845L30.8465 7.15564L31.5117 10.6799C31.6015 11.0424 31.6007 11.4215 31.5096 11.7837C31.4185 12.146 31.2397 12.4803 30.9891 12.7572L30.1774 13.5705H24.4297V7.82283L25.241 7.01111C25.5181 6.75998 25.8527 6.58094 26.2153 6.48979C26.578 6.39863 26.9575 6.39817 27.3203 6.48845ZM18.0332 25.7115L14.9375 28.8095V24.4299H16.752L18.0332 25.7115ZM19.9668 12.2888L23.0625 9.1908V13.5705H21.2481L19.9668 12.2888ZM24.7442 19.0002L23.2629 20.4818C23.1347 20.6099 23.0626 20.7837 23.0625 20.965V23.0627H20.9649C20.7836 23.0628 20.6098 23.1348 20.4817 23.2631L19 24.7443L17.5184 23.2631C17.3902 23.1348 17.2164 23.0628 17.0352 23.0627H14.9375V20.965C14.9374 20.7837 14.8653 20.6099 14.7371 20.4818L13.2578 19.0002L14.7391 17.5185C14.8666 17.3901 14.9379 17.2163 14.9375 17.0353V14.9377H17.0352C17.2164 14.9376 17.3902 14.8655 17.5184 14.7373L19 13.258L20.4817 14.7392C20.6098 14.8675 20.7836 14.9395 20.9649 14.9396H23.0625V17.0373C23.0626 17.2185 23.1347 17.3924 23.2629 17.5205L24.7442 19.0002ZM16.752 13.5705H14.9375V9.1908L18.0332 12.2888L16.752 13.5705ZM13.5703 16.7521L12.2887 18.0334L9.19064 14.9377H13.5703V16.7521ZM12.2887 19.967L13.5703 21.2482V23.0627H9.19064L12.2887 19.967ZM21.2481 24.4299H23.0625V28.8095L19.9668 25.7115L21.2481 24.4299ZM24.4297 21.2482L25.7113 19.967L28.8094 23.0627H24.4297V21.2482ZM25.7113 18.0334L24.4297 16.7521V14.9377H28.8094L25.7113 18.0334ZM16.0313 4.26814L19 2.249L21.966 4.26775C22.285 4.46073 22.5518 4.72903 22.743 5.04912C22.9342 5.36921 23.0439 5.73132 23.0625 6.10369V7.25486L19 11.322L14.9375 7.25681V6.10564C14.9556 5.73327 15.0648 5.37102 15.2555 5.05066C15.4462 4.73031 15.7126 4.46161 16.0313 4.26814ZM6.48829 10.6818L7.15548 7.15564L10.6797 6.48845C11.0423 6.39838 11.4214 6.39894 11.7837 6.49009C12.146 6.58124 12.4803 6.76018 12.757 7.01111L13.5703 7.82283V13.5705H7.82267L7.01095 12.7588C6.76035 12.4819 6.58162 12.1477 6.49049 11.7855C6.39935 11.4233 6.3986 11.0443 6.48829 10.6818ZM4.26798 21.9689L2.24884 19.0002L4.26759 16.0342C4.46057 15.7152 4.72887 15.4484 5.04896 15.2572C5.36906 15.066 5.73116 14.9563 6.10353 14.9377H7.2547L11.3219 19.0002L7.25665 23.0627H6.10548C5.73311 23.0445 5.37086 22.9353 5.05051 22.7447C4.73015 22.554 4.46146 22.2876 4.26798 21.9689ZM10.6817 31.5119L7.15548 30.8447L6.48829 27.3205C6.39856 26.9579 6.3993 26.5788 6.49044 26.2166C6.58157 25.8544 6.76032 25.5201 7.01095 25.2431L7.82267 24.4299H13.5703V30.1775L12.7586 30.9892C12.4818 31.24 12.1476 31.4189 11.7854 31.51C11.4232 31.6011 11.0442 31.6018 10.6817 31.5119ZM21.9688 33.7322L19 35.7513L16.034 33.7326C15.715 33.5396 15.4482 33.2713 15.257 32.9512C15.0659 32.6311 14.9562 32.269 14.9375 31.8967V30.7435L19 26.6783L23.0625 30.7435V31.8947C23.0444 32.2671 22.9352 32.6293 22.7445 32.9497C22.5538 33.27 22.2874 33.5387 21.9688 33.7322ZM31.5117 27.3205L30.8445 30.8463L27.3203 31.5119C26.9577 31.6019 26.5785 31.6012 26.2162 31.5101C25.8538 31.419 25.5195 31.2401 25.2426 30.9892L24.4297 30.1775V24.4299H30.1774L30.9891 25.2416C31.24 25.5187 31.4189 25.8532 31.51 26.2158C31.6011 26.5783 31.6017 26.9577 31.5117 27.3205ZM33.7324 21.9689C33.5395 22.2879 33.2712 22.5547 32.9511 22.7459C32.631 22.937 32.2689 23.0468 31.8965 23.0654H30.7434L26.6781 19.0002L30.7434 14.9377H31.8945C32.2667 14.9561 32.6286 15.0654 32.9486 15.256C33.2687 15.4467 33.5372 15.7129 33.7305 16.0314L35.7496 19.0002L33.7324 21.9689Z"
                fill="#262626"
              ></path>
            </svg>
            <span></span>
          </div>
        </div>
        <div className="product_container">
          {props.products.map((item: any) => (
            <div className="prodimg">
              <img src={item.image} alt="" />
              <div className="prod_info">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
                <button>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.93188 21.7788C7.31743 21.7788 6.00873 23.0876 6.00873 24.702C6.00873 26.3164 7.31749 27.6251 8.93188 27.6251C10.5463 27.6251 11.855 26.3163 11.855 24.702C11.8551 23.0876 10.5463 21.7788 8.93188 21.7788ZM8.93188 26.326C8.03498 26.326 7.30792 25.5989 7.30792 24.702C7.30792 23.8051 8.03498 23.0781 8.93188 23.0781C9.82878 23.0781 10.5558 23.8051 10.5558 24.702C10.5559 25.5989 9.82878 26.326 8.93188 26.326Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.25"
                    ></path>
                    <path
                      d="M21.2742 21.7788C19.6598 21.7788 18.3511 23.0876 18.3511 24.702C18.3511 26.3164 19.6598 27.6251 21.2742 27.6251C22.8886 27.6251 24.1974 26.3163 24.1974 24.702C24.1974 23.0876 22.8887 21.7788 21.2742 21.7788ZM21.2742 26.326C20.3773 26.326 19.6503 25.5989 19.6503 24.702C19.6503 23.8051 20.3773 23.0781 21.2742 23.0781C22.1711 23.0781 22.8982 23.8051 22.8982 24.702C22.8982 25.5989 22.1711 26.326 21.2742 26.326Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.25"
                    ></path>
                    <path
                      d="M27.8676 4.72709C27.7323 4.57932 27.5472 4.48681 27.3479 4.46723L6.20364 4.17491L5.61901 2.38851C5.20715 1.19432 4.08887 0.388122 2.82573 0.374756H0.649596C0.290823 0.374756 0 0.665579 0 1.02435C0 1.38312 0.290823 1.67395 0.649596 1.67395H2.82573C3.53202 1.68955 4.15395 2.14307 4.38479 2.81075L8.50971 15.2505L8.18494 15.9975C7.82269 16.9316 7.93148 17.983 8.47726 18.8232C9.01781 19.6485 9.92721 20.1577 10.9133 20.1874H23.5479C23.9067 20.1874 24.1975 19.8966 24.1975 19.5378C24.1975 19.179 23.9067 18.8882 23.5479 18.8882H10.9132C10.3564 18.8743 9.84378 18.5813 9.54904 18.1087C9.25759 17.6418 9.19772 17.0666 9.38665 16.5496L9.64652 15.965L23.3205 14.5359C24.8225 14.3704 26.058 13.278 26.4061 11.8076L27.9651 5.27914C28.0354 5.09115 27.9981 4.87971 27.8676 4.72709ZM25.1393 11.5153C24.9285 12.4619 24.1248 13.1601 23.1581 13.2367L9.64652 14.6333L6.62589 5.4741L26.5359 5.76642L25.1393 11.5153Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.25"
                    ></path>
                  </svg>
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default AllProducts;
