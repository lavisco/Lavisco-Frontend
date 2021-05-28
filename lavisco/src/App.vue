<template>
  <div id="nav">
    <section>
      <div class="top-header">
        <div class="top-header header">
          GOOD NEWS! WE ARE SHIPPING WORLD WIDE NOW.
        </div>
      </div>

      <div class="header">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-md-2 col-sm-2">
              <div class="header-left-side" align="left">
                <router-link
                  to="/"
                  style="text-decoration: none; color: #ff8080"
                  >Lavisco</router-link
                >
              </div>
            </div>
            <div class="col-md-8 col-sm-2" align="center">
              <div class="buttonn mt-3">
                <router-link to="/signup" class="button-primary">Order For Yourslef
                </router-link>
                <router-link to="/signup" class="button-secondry">Start Selling Today
                </router-link>
              </div>
            </div>
            <!-- <div class="col-md-8 col-sm-2" align="center"></div> -->
            <div class="col-md-2 col-sm-2" align="right">
              <div class="header-left-icon d-flex">
                <span class="icon" data-toggle="tooltip" title="Search">
                  <vue-fontawesome icon="search" color="black">
                  </vue-fontawesome>
                </span>
                <span class="icon ml-2" data-toggle="tooltip" title="Cart">
                  <vue-fontawesome icon="shopping-cart" color="black">
                  </vue-fontawesome>
                </span>
                <div class="icon ml-2" data-toggle="tooltip" title="Login">
                  <router-link to="/login">
                    <vue-fontawesome icon="sign-in" color="black">
                    </vue-fontawesome>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <router-view />
  </div>
</template>


<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,400,600");

body {
  font-family: Poppins, serif !important;
}
/* Search Style */
#search {
  position: fixed;
  top: 191px;
  left: 15px;
  width: 98%;
  height: 67%;
  border-radius: 22px;
  background-color: #ff5a7c;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-transform: translate(0px, -100%) scale(0, 0);
  -moz-transform: translate(0px, -100%) scale(0, 0);
  -ms-transform: translate(0px, -100%) scale(0, 0);
  -o-transform: translate(0px, -100%) scale(0, 0);
  transform: translate(0px, -100%) scale(0, 0);
  opacity: 0;
  display: none;
}

#search.open {
  -webkit-transform: translate(0px, 0px) scale(1, 1);
  -moz-transform: translate(0px, 0px) scale(1, 1);
  -ms-transform: translate(0px, 0px) scale(1, 1);
  -o-transform: translate(0px, 0px) scale(1, 1);
  transform: translate(0px, 0px) scale(1, 1);
  opacity: 1;
  z-index: 106;
  display: block;
}

#search input[type="search"] {
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -51px;
  width: 60%;
  margin-left: 20%;
  color: rgb(255, 255, 255);
  background: white;
  border: 1px solid transparent;
  /* border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 0px solid transparent;
  border-right: 0px solid transparent; */
  font-size: 40px;
  font-family: Roboto;
  font-weight: 300;
  text-align: center;
  outline: none;
  padding: 10px;
  border-radius: 22px;
}

::placeholder {
  color: rgb(156, 156, 156);
  font-size: 14px;
}
#search .close {
  position: fixed;
  top: 15px;
  right: 15px;
  opacity: 1;
  font-size: 27px;
  color: #fff;
}

#search .close:hover {
  color: #ffffff;
  cursor: pointer;
}
.buttonn-search {
  position: absolute;
  top: 57%;
  left: 0;
  margin-top: -15px;
  width: 30%;
  margin-left: 37%;
  background-color: #008ae6;
  color: rgb(255, 255, 255);
  border: 1px solid transparent;

  font-family: Roboto;
  font-weight: 300;
  text-align: center;
  outline: none;
  padding: 5px 10px;
  border-radius: 12px;
}
.buttonn-search:hover {
  background-color: rgb(238, 238, 238);
  color: black;
  border: 1px solid black;
  transition: 0.4s ease-out;
}
.search-header {
  font-size: 60px !important;
  margin-top: 20px;
  font-weight: bolder;
  color: white;
}
.search-sub {
  font-size: 30px;
  color: white;
}
/* End Search */
.row {
  width: 100%;
}
/* .color {
  background-color: rgb(238, 238, 238);
} */
.top-header .header {
  font-family: sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: black;
  text-align: center;
  margin-top: 30px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  line-height: 18px;
  padding: 4px;
}
.card-body {
  padding-top: 0px !important;
}
.header {
  margin-top: 10px;
}

.header .header-left-side {
  font-size: 38px;
  text-transform: uppercase;
  font-weight: 600;
  color: #ff8080;
}
.buttonn {
  margin-top: 20px;
}

.buttonn .button-primary {
  font-size: 16px;
  font-weight: 500;
  padding: 10px 25px 10px 25px;
  color: white;
  background-color: #008ae6;
  border-radius: 12px;
  border: 1px solid transparent;
  align-self: center;
  margin-top: 8px;

  margin-left: 8px;
}

.buttonn .button-secondry {
  font-size: 16px;
  font-weight: 500;
  padding: 10px 25px 10px 25px;
  color: white;
  background-color: #ff8533;
  border-radius: 12px;
  border: 1px solid transparent;
  align-self: center;
  margin-top: 8px;
  margin-left: 8px;
}

.buttonn .button-primary:hover {
  background-color: transparent;
  color: black;
  border: 1px solid black;
  transition: 0.4s ease-out;
}

.buttonn .button-secondry:hover {
  background-color: transparent;
  color: black;
  border: 1px solid black;
  transition: 0.4s ease-out;
}

.icon {
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.19);
  padding: 11px;
  border-radius: 6px;
  font-size: 30px;
}

/* For mobile phones: */

.icons {
  margin-left: 10px;
}

.icons-text h5 {
  color: #404040;
  font-weight: bold;
}
.fb-box {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 250px;
  height: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
.all-categories {
  display: block;
}
.mobile-section {
  display: none;
}
.mobile-view {
  display: none;
}
@media only screen and (max-width: 768px) {
  .dropdown-menu {
    border-radius: 22px;
    background-color: #ff5a7c;
    color: white;
  }
  .dropdown button {
    font-size: 18px;
    background-color: transparent;
  }
  .mobile-view {
    display: block;
  }
  /* End */
  .row {
    width: 100%;
  }

  .button .button-primary {
    display: none;
  }

  .buttonn {
    display: none;
  }

  .header .header-left-side {
    font-size: 24px;
    float: left;
    margin-left: 6px;
    margin-top: 20px;
  }

  .header-left-icon {
    position: absolute;
    top: 0;
    right: 10px;
    margin-top: -40px;
  }

  .icon {
    font-size: 12px;
  }
}
</style>
