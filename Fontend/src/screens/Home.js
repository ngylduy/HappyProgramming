import React from 'react'
import HomPage from '../template/HomePage';
import "../styles/home.css"
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <HomPage>
      <>
  {/* ======= About Section ======= */}
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div
          className="col-lg-6 order-1 order-lg-2"
          data-aos="fade-left"
          data-aos-delay={100}
        >
          <img src="https://cdn.mentorcruise.com/img/home/hero/homehero_1x.png" className="img-fluid logo" alt="" />
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <h3 className='title'>Why choose Happy Programming ?</h3>
          <p className="fst-italic">
            The Happy Programming is based on 3 criteria such as effective
            teaching, rapid progress, and especially 2 trial lessons.
          </p>
          <ul>
            <li>
            <Icon className="icon2" icon="bi:check-circle" /> You can only study well if
              you love learning. The mentor at Happy Programming always knows
              how to motivate you, with interesting, easy-to-understand and
              effective teaching methods.
            </li>
            <li>
            <Icon className="icon2" icon="bi:check-circle"/> With a good mentor at Happy
              Programming, you will quickly learn to progress, have different
              results after only 10 lessons: study hard, study better, score
              higher.
            </li>
            <li>
            <Icon className="icon2" icon="bi:check-circle" /> After the first 2 trial
              lessons, if you are not satisfied with the tutor, you do not need
              to pay the tuition fee. Of course, Happy Programming always has
              mentors that make you most satisfied.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* End About Section */}
  {/* ======= Counts Section ======= */}
  <section id="counts" className="counts section-bg">
    <div className="container">
      <div className="row counters">
        <div className="col-lg-4 col-6 text-center">
          <span
            data-purecounter-start={0}
            data-purecounter-end="10"//...
            data-purecounter-duration={1}
            className="purecounter"
          >10</span>
          <p>Mentees</p>
        </div>
        <div className="col-lg-4 col-6 text-center">
          <span
            data-purecounter-start={0}
            data-purecounter-end="10"//
            data-purecounter-duration={1}
            className="purecounter"
          >10</span>
          <p>Skills</p>
        </div>
        <div className="col-lg-4 col-6 text-center">
          <span
            data-purecounter-start={0}
            data-purecounter-end=''
            data-purecounter-duration={1}
            className="purecounter"
          >10</span>
          <p>Mentors</p>
        </div>
      </div>
    </div>
  </section>
  {/* End Counts Section */}
  {/* ======= Why Us Section ======= */}
  <section id="why-us" className="why-us clm">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-4 d-flex align-items-stretch">
          <div className="content">
            <h3>Why Choose Mentor?</h3>
            <p>
              There are many people who have no direction and lose their roots
              in some subjects but don't know where to start over. With Happy
              programming you can find yourself the best mentors who are well
              trained and have clear certifications that are thoroughly vetted.
              Thereby they can guide you starting from the most basic steps and
              bring you absolute satisfaction
            </p>
          </div>
        </div>
        <div
          className="col-lg-8 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <div className="icon-boxes d-flex flex-column justify-content-center ">
            <div className="row">
              <div className="col-xl-4 d-flex align-items-stretch mp">
                <div className="icon-box mt-4 mt-xl-0">
                <Icon className="icon1" icon="bx:receipt" />
                  <h4>Carefully selected study materials</h4>
                  <p> 
                    Study materials are carefully prepared by qualified mentors
                  </p>
                </div>
              </div>
              <div className="col-xl-4 d-flex align-items-stretch mp">
                <div className="icon-box mt-4 mt-xl-0">
                <Icon className="icon1" icon="bx:cube-alt" />
                <i className="fa-duotone fa-star" />
                  
                  <h4>Modern teaching methods</h4>
                  <p>
                    Advanced modern teaching methods make students interested in
                    learning
                  </p>
                </div>
              </div>
              <div className="col-xl-3 d-flex align-items-stretch mp">
                <div className="icon-box mt-4 mt-xl-0">
                <Icon className="icon1" icon="bx:image" />
                
                  <h4> Illustrating images</h4>
                  <p>
                   
                    The illustrations make learning closer and more accessible
                    to students
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End .content*/}
        </div>
      </div>
    </div>
  </section>
  {/* End Why Us Section */}
  {/* ======= Trainers Section ======= */}
  <section id="trainers" className="trainers">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <p>Popular Mentor</p>
      </div>
      <div className="row" data-aos="zoom-in" data-aos-delay={100}>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <img
              src="data:image/jpeg;base64,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"
              className='img-fluid avt'
              alt=""
            />
            <div className="member-content">
              <h4>Le Vu Hieu</h4>
              <span>Fullstack Developer</span>
              <p>Today's failure is tomorrow's victory.</p>
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUEhgREhQZGRgZGBgUGhgbGBoaGRkYGBgaGxgbGRobIi0kHB0pIBgYJTclLC4wNjQ0GyQ5QTkyPi0yNDABCwsLEA8QHhISHjYpJCkyMjYyMjIwMjIyMjIyMjAyMjUyMjIyMjIyMjAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAOgA2gMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAwQCBwj/xABEEAACAQIEAwQGBgYKAgMAAAABAgADEQQSITEFQVEGEyJhMlJxgZGhQmJygpKxBxQjM2PBFSQ0Q1NzotHh8IOkFjWT/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EACsRAAICAgEDAwIGAwAAAAAAAAABAgMEETESIUEFE1EioTJhcYGRsRQj0f/aAAwDAQACEQMRAD8A+zRK7h+2fD3OVcZRDA5cruKbXBsRZ7G/laTtOorAFSCDqCCCD7LQDbERAEREAREQBERAEREAREQBETBgFa7bdoxgMKaosarnu6SG5DOQdTb6KgFjttbciVn9EnF6lX9ZpVqhd84r3bc59HOnK4FhpYWEpvbvjv63jnZTenRLUKfTwn9o41t4mFrjcIvWS/6IamXHVF9ahb8LAwD7PERAEREAREQBERAEREA+PfpR7Kd27cQooDSc/wBYWw8D6AVQNsraBuh15mUPA4irQObD1HpHc927ICfNQcrewifperTDKVZQykEFSLgg6EEHQjU6T4f247HtganeUgThnPhOpNIn6DH1fVJ9kA38L/SbjaOlcJiFG5I7upb7SAqfwj2z6hhe0lNghrI9AuqspqAZDmAIAqKSl9diQfKfnup6J9hn3fCkGknMNTTQgEEFF3B0Mw5uU8fTS2mW119ey0q1xcTMqNPDNSObC1DT/hkFqJ9qE3T7hHsMksFxwZhTxC925NlN81Nz9R+v1WsZ7j5td3D0/hiVUo8k9E8hpmbNlRmIiegREQBERAPMh+0eJZKGSmctSqy0EI3VqmhYfZXM33TJiVrilTPjFX6NCnnP+ZWJRPeqJU//AEEzZNvt1uROEep6Pj/aTszUwLLY56DEKlQC1jyRxyaw0Ox9sm/0T/8A2J/yW/MT6BjMLTq03o1VzI6lWXyPMdCNwfKVH9HPB3w3FcRQqamnRurW9NGcZW9pGh8wZnwMz3o6l+JfdE7aunuj61EROiUiIiAIiIAiIgCIiAJoxOHSojU6ihlYFWUi4YHkZviAfD+23YZ8Jmr4cF8Mb3G70b8j61Podxzlt7KcUWpg6DE6hBTJ5Eppv7LS/OoIsRcHQg7W9kqOO7N9zmfCJdGYu1AaWY+k1I7C+5U6HlaYs7H96Glyi6iajLud08OoZSjAMpFipAII6EHeRGExp1Cm4U2ZW0ZSNwQdVMk8PiFfbfod/wDmfOTqlWzodmjOGqVaH7u9SnfWkxu6D+Ex3H1G9x5SewGNp1kD02uNjyKkbhgdQR0MhpoqUnV+9okJU539CoB9Fx+TbidHD9RafRZx8mW2jyi2RI7hfEVroSAVZTldD6SN0PUdDsRO9mA3ndUk1tGM9xNauDsQffPd56DMRE9B5lRwNTOatb/ErOw+xTIopbyIplvvGWPimK7qhVrWv3dN6luuVSf5SvcPw/d0adPmlNFPmQozH4kzkerWago/JpxluWzojhNMHGs9hdcOqE8yGclQfZlb4mJ77MgtVxNW+hdKa+ymgv8ANzMXpUd3b+EXZL+kscRE+kMAiIgCIiAIiIAiIgCIiAJi0zEAiOK8Ep1zn1SoBYVE0YeR5MNNjK1jMBXo/vELrv3lME2+1T3X3Xl6mSJRbRCxd0WQtlHgpGD4kDzDja43H2hvJFWBFwd5u7QYPDhDUekrP6KZfC7Mx8Khh5yO4fgRSSxOZz6bEk3PQX+iNhODm4sKe++78Gyu3r8GamBDVDUNRwSgp2RsgyjkbanX4TP9HUuaFvtO7fm064mL37Na6npFntx+DkHDaPKnb2M4/Jp6TDMn7utVT7+cfBx/OdMSUcm2PEn/ACHVF+AnE8TT9JFrLr6PgqW5eE+E+4yTwHFKda4RvEvpIwKuupGqnW2hkZac+Iw6vYtcMuqups6a6FW/kbgzfR6nKPafdfczzxl4JDtaT+p1FH0zTpe6pVSmfk00PuT5n/iRvEsfVFNKOIswOIw2WsBZWC4im2WoPoPYb+ibcr2kiR+ZkfU7I2OMovto9x49O0zVXqZVLf8AfKd3ZGllwiuRY1C9Y/8AkYsP9OWQHHHLKKSek5WmPtVCEX4Ak+6XTD0giKi7KoUewCw/KavSqtRcmRyZcI3xETsmQREQBERAEREAREQBERAEREATF4nJj8UKVJ6rHRVLe/kPjaeN6BB4ur3uJZvoUfAnQ1CPG3uBA95njE4mnTXPUqIi9WYLf2dZ54fQK00V/SN3f7bnM35290+T8V4mtbiPe4tS9JK2Q0+QpoxFgPaAT12nz8anmXybfZGzq9uKPrWHxCVFz03V12zKwYX6abGbpXf6dwtXH0KeBsc6P3pRSq5VUZARp4gba9CRLDMmXjexPW9l1U+pbZmIiZC4REQDw6KwKsAysMrKRcMDyI6TRh0NJCrOXVb5S2rBLaKx+kRtfe1r9Z0zk4rUKUKlQLmyIXy3tfLqdeUsg230fLK2ku7NXBqBq4sMwutId63TO4K0x7lzn8Muki+A8ONCkFcguxNSoRsXa2g+qoCqPJRJQT6zHq9uCic+yfVJs9RES8rEREAREQBERAEREAREQBERAPMofa7jBeoKFFgBTYO7EBlZxqiEHcDc+6XHieI7ui9QfQRm+AM+UUPQUk3JGYnmWfxMT5kkzNkz6Y6Xk6Pp2KrZNy4Rc+F47vqYqWytcqyjk6728uYld7Q9iKeJqmvTqmk76uuXOrH1gLgg++07+yh8NYfXU+8oLydnzrtnRa+h6LLaotuL8EJ2a7NUsECysXqMMrVGAHh3yoo9FfmZOyN4xxH9WQVnF6d8j5RdwW9BlBNmHIiRNXtxhQLqlZj0yKo+LN/KeShde+vTeyMdR7IsD46kKq4dnUVWXOqG4LKNyvI7HnOiVjhfbOjVqCnUpmiTojuyspbmpIHgJ+Blntyld9Lr0mtP+yUX8gC9gNzI6jxF6oqPhaBrpTJQuHVA7rfMtEMCHK6XY5VJJAJsbdeIRmpuiGzsjqh6MyMF+ZE+SdnO1WLwWHfC0soBJFnUlqNSwV8uu9xex0Bv1m707Fhd1OffWuxnyLJR4PqfCOKUsVSFag+ZCSpBFmRgLlXXkZnjJ/qtb/KcfFSB8yJSv0UUmAxLC+T9il/WqLnLa+sFK39ol3xyZ+7o795WRD9hD3j/AOlCPfKrMdQyVCPG1/0kpt17ZbUFgB0AE9zAmZ9OYBERAEREAREQBERAEREAREQBETBMA4+KUM9CpT9ZGX4gz5LRqWpq7aAKt9OY8NgOZuLAdZ9llGw3B6FPE1b0waiuaiMzFrJVuQyqSQtmzC4HSYc5qMVJ+DoYGT7Tktb2euBYQ06ADizuxqMOalvRU+YFpJxE+Zsm5ycmX733ZXu29LPhFTXxVkHh30ubSqJwA21poD9dyW/4l47Qfu6Z6Vl+asJEzt4D/wBP7svogmm38lSxvBymhUpfQa50Pkb7fL2GdfBu0mMolcMoWrdkpJTqEkqWIyhXXxBLa63sAdrSxOgYFCLg6ETV2V4OP1h8U2q0s1GkfWY3Dt55QSl+ufpL8iUFBua3ojkVxS2i10FqAHvCpa59BSFA5DxElvabX6ASM4l2ZwWIfva1BWc6FlZ0ZretkYZzbmdZLiZAvpPn42zjLcXp/kZ3BNdzRhcNTpItKkioq3yqqgKL7kDqevObOHrnxiaaU6DP9+q4VT+Gm/xlfxXaTMcuGVWUEjvnzFHI37pVILqDpnJANtM286OzvHgr1nrkNUbuqSU6SMXcIrObU8zEC9TVyQvUidLDpkreuzwQurkq967F+EXlabieLf0UpUF/iE1qlvrJTKop9lRppK12HjxlU+SJRQe7wMw/FOlP1CmL1vf6GONMmWuZlKfG/q1ak7167I2fvMzB1VQvpMoUEKCRdgNPZLjTcMAykEEAgg3BB2II3EvovjbHqiQlFxembYiJeREREAREQBERAEREAxNNesiKWdlVVFyzEBQOpJ0AmjiWNWjSaq17KL2G7Hkqg7sTYAecrIwjVHFbFhXqXDKh8dKh0Wmp8LOATeoRmJJtlWwmTJyoUx78/BZCDk9Ilv8A5Phj+7NSr50qFWop9jqpQ/ikTxPiYZ0rLh8UGW6MO4c5qbkZrZTupAYX10tO9mJ3J95mJx7fU5TTi4rTNMcbXfZwpxagWCGqqsTYLUD0WPsWqFJ907yOs81FDKUcBlO6sAykeYa4+Uj/AOju7/sz91/DIL0G8u7+gfNCPsnaYdQl+RduS/Mzx2kWwzEalMtUAc8jAn5XkNcHUbHUHyO0ncPxBS3d1LU6nOmzDxedNjpUU9RryIE4j2fANkrVUS58C5PDfXKlRlLqvkNRsCBN2LkRpi4z/YtquUdkbTpvVfuaZIIt3jj+5U9L6d630Qdr5jtY2ehRSmi06a5VQBFUbBRtvv7ees84PC06SCnTQKo1sL6tzZiSSzHmxJJ6zdM+XlO16XZLgSk5vbMESC7V4k92mGU/vsxcjfuEyhlBvoXZkS/qlpPSt9p8OwdMQqsVCNScqpbJ4s6sVANlPiDNyOW+mshiJe4tiGnNdXGyIHTToOQFjoAOQH5D3Sw9laVqDVbW75y4OxNNQEpXO5BAZwPrSH4Xw44rXXuL2Zx/egfQpnmptZn2sSouSStxA5CwA0AGgAGgAHIW2+E05ViUelcvk05dsZtRjwv7PQiJpxWJWmjVHvZbaDdmOiqPrEkAe2c5Jt6Rkb0jVxGqKdNqnizAZFZQmdWfwrlLkKNSNzaTnBMEKNBKeXKQMxGdnszatZm1tcny6SqUKVfPTq16bOyOamTNhSiMylcqM2V1yg7nMSb6iT449UHpYOv91sO35Vb/ACn0GD7VMWnJbZht6pPaRPTMgx2kogXdK6faw9Uj8SqR85vw/aDC1DlXEU83qlwrfhax+U6UbYPhr+SjpZLRPIaepM8ETET0GYiIAiIgEB2i9LDqSbGvcjkSlKq636+JFPuE0CSHHsG1Wj+zANSmy1ad+bobhb8gwup8mkEnEkIDKrWPIgAqRoysL6MCLHzE4HqlU3NSXGtGzFa00d0TlGPp9SPaD/Ke0xSHZx+X5zkuDXg2G+J5DjqPjPDYhBuw+O3thRYObjFNHoMKjKqizZnQOoIYEXXexIAIFjaa8LxTMoapTKHUEAG2htcA2YKbXFxtPPEq7OvdUQ7ZgjOyBGXu2YqwzPcbX1sdp1NgEso8RygKCWuxAFhmJ3PnNHZQSl+xVHTkz0mKRjYHXpY3nRNdKkqiyi3/AHrNkzPXgtOGpxDXLSpvVbUeFciAj1qj2Ue6/sms4KpV/tLAp/gUywpne4qubNV39GyqeYaSRPWLSxWdP4Vr8/JX075MC2w2AAA2AA0AA5DbTlMzy7AC5Nh1nBXx17hNBvmPTqBy9s8UZTZJLXB118Qq7nW17eQ5k8h5zg4c5xDLiWI7sX7hd7m5U1W89wvTU8xPGEwveI2Jq3GHRWqa712UE3sf7oWuPWPlv3YUFKCZ9wis32mGZvmxmy2h0QTfLKlNSlpcHTFpooYpX02PqnQ/8zomFprkvANv+n855rIrjK6q46MoYfBp6ieKTXBHSOFeF0l1poaZ/hO9LXrlQhT7xOhKmJp+hic49Wsit7g9PIR7SrTdEvhlWw4kyEqoy5R7p8cqr++wzW9eiwqr7Stlce5TJDAcXoVtKdRWYbr6Lr9pD4l94kXaacVhadS3eIr22JHiU8irjxKfYRN9Xq009TW/0KJYy8FqvMyoitXoKz06wdEBZkxDaKqhibVwMy+1w224m6j2pLKHGCxJDAMDkXYi/rTrU5ULY9SM0oOL0WmIiaiBiV7i3Z/O5rUGCubFlYE06ltiwGqtt4h01BlhmDIyjGS1I9jJxe0fPawqI/dvRcOFznJaooBNhquu/UAzBLf4VY/+Jv52El8PU7x6tbWzuUW/qUroPi2czonzORbGNjjFdkzpVyk47ZBLhqzejRCX+lUcC33EuT8p10uDqdazmp9S2Sl+BdX+8T7JJATMzyvb7LsS6d8mijhKaMXSmiFgASqhbgbXA0m+IlLbfJ6lrgRETwkJrq1Aqlj/AMknYTZIfj+IemmdKZfIpa2bKtzzZvlYa3aWVQ65KJFvXJqxeJ07x2so+AvsABux6DWSPCuBPVPeYlctMWK0T6Tn1q3ltZPj0ElwngC0mFWo3eVbekRZU8qabL7dSesnJ9JjYca+75MVuQ5fTHghe05/q/dA2NR6dEDydwGH4c3wkZxR/DYfSb5DX/ad/HWzYjD07aKKtf8AAopr86oPukRxF/GB0H5zn+oy6rlH4Rbix7bOOdVDGMuh8Q+fxnHUqKguxtc22JuemkzTdW1Rg3sIPymd19S20atreibo1lcXU+7mJtkECQdCQfnO7D47k/4v95lnVrgNaO+IESkCeXcKpZiFVQWZibBVG5J6Q7KqlmIVQCSxNgANyYwGAauwq1lIpKQ1OkRYuQbipUHTmqHbc62trxMSV0tLjyym21RRrwPDziitWspWgCHSiwsajDValZfVB1Wny0ZtbBbPbynoCZn09VUK4qKRz5ScnszERLSJiRnHcWaWHdl1cgIg6u5yp8zJIyu8aqZ8TTpDamDXb7RulMfHM33JnyLFXW5fBKEeqWjVh6IpotNdkUJfrYan3m5982RaJ8i3t7OolpaERE8JCIiAIiIAnBxgXo5fWqYdPc+JpKfkZ3zh4uf2YPSthmPsGKok/IS7G17sd/KK7PwsmOP8SqUBSKKrd5WWkcxICqUdr+EEk3VRbznPQ43WK5jQVxyNOop+TWMz2yFsKH9Svhm/9imrfJjIKm7Uycp8iDsbTv5l9lcl0mWmlTTZJGoamIesUdB3dOmocWN8zu5A6egL+UjsS2ao3tsPdJGjiQw6EDY7+7qJErQaq60ENmqXu3NE3d/bqAPMicuHVdc213ZpilXH9CX7L4PO5xLeit6dLz5O49pGUeQPWTGM4Lh6pvUpKW18QGVrnfxLYzsoUFpqqKLKoCgdABYTfafQwqjGKic+c3KXUVit2YI/c1mHRagDrf26NI2vwzE0/SpZx61Nr/6GsZeYtK54tcvBKN848M+f4biARspNvqOCjedg0mBWXIXzAKAWLE2CgbknlLDiMMjjK6K46MAfzkUOzOGzBghABDFAzd2xXbMmxsdfbMNnpUZPaei7/Kb5Ry8NwP6wVrVFIpAhqaMLFyNqlQfNV5bnXayzAmZ0qqo1xUYozSk5PbPUREtIiIiAeGNtZUsC2fPiD/fOXH+Wvgp+4gFvvyW7SVytDu0NnrMKCHmM/pMPsoHb7s4lUABVFlACqOiqLKPgBON6rbqKgv1Zqxo7ez1EROCbhERAEREAREQDE4+MUWqYaqiC7ZGKDq6DMg/EonbANtRyN5KEumSZGS2tHPx7iVHFcMxD4aor/sHqqFILZkXOt13vdRKWO0wsXZdleofO1JWAHtqZvdIfjeCXD4mrTtlTPmRtVGStd1TMNLA51sT9CcVYXpm2xUgdLEW3n0tnTd0toqqj0Rfc+qYHs2zYek6V3V2pIzB/GpdkBY2Oo3OxktwLhBo5qlVlao9gSoIVUX0VUHbW5PmfKS2Gp5UVfVVV+AtNk1wqjF7SMMrJNabMgTMRLSAiIgCIiAIiIAiIgCIiAV3j7f1nDLytWYfaFMgfJmngTr7RYZmRatNcz0X7wKN3XKVdB5lGa3mBK3UxRZs6PdDqhU6Ff9+o5G4nA9TplK1S8aNuK9pomYkZTxzj0rN8j8ZuTiC81YfOct1SXg16Z2xOb9fp9T+EzBx6fW+H+8j7cvgHVE4H4h0T4n+Qmpse/wBUe7/eSVUgSkSK/Xn6j4T2uPfmFPxE99mQ0SUTip49T6QK/MTrVgRdTcdRISi48g1YYAYxAwBWtSemwIuC1Eh6eh+q9ce4T3juw+BqHMKPdte96ZKXN7+ILo3vms/2nCKN+9qv9xcPUVvdmdPfaWufS+nPqpWzm3dpPTMiZiYnQKTMREAREQBERAEREAREQDE0YnEJTQu7BFUXLMQAB5kzfK32p4PWxBpNRZf2ZqMabO6KzMlkYvTBZSpvtrZjYiRk2l2PUaq3aJnfusOoU82qKxZRa+Y0l8SLtrUNPyBkXV4XYNVXEEOxzsWRDSc237tbAX6qb9SZ7odnq+UK2HovbXLUrsKQNtctBKWTe9ma7dTOwdnsU9u8r0UsLBUoswXplLvb/TOZdDItlpdl9jRXKEeSIQtl8YXNr6FyCOVs2tz0nhK7MyotCsWe+UFaaZsouSCX2HXaWJOyvr4qsfJRTQf6Uv8AOSXDuC0aBLU0OdhYu7M7kdC7ktbyvaK8F73P7Fk8pJfSVpOE4xtsOi/5lcD5U0b85vXs7iyNXw6nplqP8TmX8pcYmpYdS8FDyJvyUGvwTiS+iMMw+oHVvw1Lj5zlaliqZHe03A52wxfTyajUe34Z9ItBESw63wtHsciSPm6YymzZVqIW9UsFf8D2a/unSUI1sfbY2+Mu+JwVOouSpTV1O6soYH2giRb9lMHfMtLIf4b1KY/CjAfKZp+nvw/sXRy15RWpsXEdz43zBNiMrG9zYWVRdm6ATjPB8TTXLWpYp8oAZ6eINRHI3YJnVxfe2U2uRrNmEGEpkhqndM1rioKlJmtsC+IF2t7Zhsx5QX1Jv9i9XRkiY7M4mnVrPVd8tXKaaYdvC9KlmzMSptmZ2CsxW6jKqj0SWtoMpeMwSGnmFHvtstmXML38dNywAYb+FlJ6icvDu1FWhdMTmqImjNlZa1MHRTUR7MFPU3B5O50nQxMuEo9OtaMNlbT2ns+gROfDYhKiLUpsGVhdSNiP+8p0TpFIiIgCIiAIiIAiIgCIiAJgxEATF9YiEDMzEQBERAExMxAExEQDFp4dAQQbEHkRce+IkQQ9Ts1hiS9NO5b16DGkT5sEsr/eBkbjuzmIcALiKblPQepSy1qZI3FSiyg+alLMNDcGYiVuiD+rXckpMl+z3CP1Wj3OYNd2qHKmRAXN2CJmOVb3sLm1+lhJe/KIlq4InqIiegTBMRAF5mIgHkm2szeIgGYiIB//2Q=="
              className="img-fluid avt"
              alt=""
            />
            <div className="member-content">
              <h4>Hoang Gia Khanh</h4>
              <span>Developer</span>
              <p>
                No one has ever said that learning is easy .Remove the word
                "easy" from your mind to be successful,
              </p>
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <img
              src="data:image/jpeg;base64,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"
              className="img-fluid avt"
              alt=""
            />
            <div className="member-content">
              <h4>Trinh Dinh Khai</h4>
              <span>SE Engineer</span>
              <p>
                One minute of good thought is better than a day of hard work.
              </p>
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Trainers Section */}
</>

    </HomPage>
    );
}

export default Home;