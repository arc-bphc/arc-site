{
  /* How the old site handled things lmao:
            //Check membersData.js
            
            <script type="text/javascript">
            // posts = members
            // post = member
            // title = name
            // url = git
                var emails = ["sabdulazeem01@gmail.com","abijith3678@gmail.com","adi.chopra108@gmail.com","f20160372@hyderabad.bits-pilani.ac.in","f20200104@hyderabad.bits-pilani.ac.in","apeinsteinz@gmail.com","arunabhsingh25@gmail.com","f20170443@hyderabad.bits-pilani.ac.in","f20180861@hyderabad.bits-pilani.ac.in","","f20171011@hyderabad.bits-pilani.ac.in","jaydigvijay@gmail.com","divyekalra1@gmail.com","gauriptewari@gmail.com","f20171450@hyderabad.bits-pilani.ac.in","f20190429@hyderabad.bits-pilani.ac.in","f20160338@hyderabad.bits-pilani.ac.in","f20180744@hyderabad.bits-pilani.ac.in","","krsnadas919@gmail.com","f20170238@hyderabad.bits-pilani.ac.in","f20171616@hyderabad.bits-pilani.ac.in","nambi.pavan08@gmail.com","f20180131@hyderabad.bits-pilani.ac.in","f20171230@hyderabad.bits-pilani.ac.in","f20170378@hyderabad.bits-pilani.ac.in","f20171635@hyderabad.bits-pilani.ac.in","priyeshbitsh@gmail.com","dvkrajivofficial@gmail.com","reubengeorge101@gmail.com","","rithika100700@gmail.com","Rohanpanda.99@gmail.com","f20170029@hyderabad.bits-pilani.ac.in","f20170293@hyderabad.bits-pilani.ac.in","sahil.jain03.99@gmail.com","ssysaksham@gmail.com","","shubhamsingla369@gmail.com","","f20180671@hyderabad.bits-pilani.ac.in","f20171044@hyderabad.bits-pilani.ac.in","suraj.s2306@gmail.com","tanayranjan1234567890@gmail.com","sanjeev.ksr2@gmail.com","f20171398@hyderabad.bits-pilani.ac.in","f20180456@hyderabad.bits-pilani.ac.in","f20200247@hyderabad.bits-pilani.ac.in","f20200330@hyderabad.bits-pilani.ac.in","f20191074@hyderabad.bits-pilani.ac.in","f20170644@hyderabad.bits-pilani.ac.in"];

                var names = ["Abdul Azeem","Abijith Y.L","Aditya Chopra","Akhil Raj Baranwal","Ankesh Pandey","Arjun Prasad","Arunabh Singh","Avnish Tiwari","Debadarshee Das Mohapatra","Devansh Dharfani","Dhanush Karupakula","Digvijay Singh","Divye Kalra","Gauri Tewari","Gautam Sibansh Mishra","Guru Narayana","Harsh Jhawar","Jai Krishna","Jatin Badam","Krishna Das","Maneesh Sistla","Mrunalini Ramnath","Pavan Kalyan N","Phanindra","Plava Kattamuri","Prabhmeet Singh","Prathmesh Mahalle","Priyesh Mishra","Rajiv DVK","Reuben George","Rishabh Singh","Rithika Chavan","Rohan Panda","Rohit Dwivedula","Rudresh Pratap Singh","Sahil Jain","Saksham Yadav","Shikhar Srivastava","Shubham Singla","Sistla Soumya","Sriram Kodey","Sumanth Keshav","Suraj S","Tanay Ranjan","Thathapudi Sanjeev Paul Joel","Ujjwal Raizada","Utkarsh Jain","Vibhum Raj Tripathi","Visweswar Sirish Parupudi","Yash Jain","Yug Ajmera"];

                var photos = ["assets/img/members/Abdul Azeem.jpg","assets/img/members/Abijith Y.L.jpg","assets/img/members/Aditya Chopra.jpg","assets/img/members/Akhil Raj Baranwal.jpg","assets/img/members/Ankesh Pandey.jpg","assets/img/members/Arjun Prasad.jpg","assets/img/members/Arunabh Singh.jpg","assets/img/members/Avnish Tiwari.png","assets/img/members/Debadarshee Das Mohapatra.jpg","assets/img/members/Devansh Dharfani.jpg","assets/img/members/Dhanush Karupakula.png","assets/img/members/Digvijay Singh.jpg","assets/img/members/Divye Kalra.jpeg","assets/img/members/Gauri Tewari.jpg","assets/img/members/Gautam Sibansh Mishra.png","assets/img/members/Guru Narayana.png","assets/img/members/Harsh Jhawar.jpg","assets/img/members/Jai Krishna.jpg","assets/img/members/Jatin Badam.png","assets/img/members/Krishna Das.jpg","assets/img/members/Maneesh Sistla.jpg","assets/img/members/Mrunalini Ramnath.png","assets/img/members/Pavan Kalyan N.jpg","assets/img/members/Phanindra.jpg","assets/img/members/Plava Kattamuri.png","assets/img/members/Prabhmeet Singh.JPG","assets/img/members/Prathmesh Mahalle.jpg","assets/img/members/Priyesh Mishra.jpg","assets/img/members/Rajiv DVK.jpg","assets/img/members/Reuben George.png","assets/img/members/Rishabh Singh.png","assets/img/members/Rithika Chavan.jpg","assets/img/members/Rohan Panda.png","assets/img/members/Rohit Dwivedula.png","assets/img/members/Rudresh Pratap Singh.jpg","assets/img/members/Sahil Jain.jpg","assets/img/members/Saksham Yadav.jpg","assets/img/members/Shikhar Srivastava.png","assets/img/members/Shubham Singla.jpg","assets/img/members/Sistla Soumya.jpg","assets/img/members/Sriram Kodey.png","assets/img/members/Sumanth Keshav.png","assets/img/members/Suraj S.jpg","assets/img/members/Tanay Ranjan.jpg","assets/img/members/Thathapudi Sanjeev Paul Joel.jpg","assets/img/members/Ujjwal Raizada.jpg","assets/img/members/Utkarsh Jain.png","assets/img/members/Vibhum Raj Tripathi.jpg","assets/img/members/Visweswar Sirish Parupudi.jpg","assets/img/members/Yash Jain.jpg","assets/img/members/Yug Ajmera.png"];

                var quotes = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

                var facebooks = ["https://www.facebook.com/tekkonXXabdulXXazeem","https://www.facebook.com/abijith.yl/","https://www.facebook.com/adico11","https://www.facebook.com/akhil.r.baranwal","https://www.facebook.com/ankeshpandey.pandey.545","https://www.facebook.com/profile.php?id=100037727361589","https://www.facebook.com/arunabh.singh.1447/","https://www.facebook.com/avnish.tiwari.796","https://www.facebook.com/dev.ddm.9","","https://www.facebook.com/dhanushkarupakula.k","https://www.facebook.com/digvijay.singh.31508076","https://www.facebook.com/divye.kalra.5/","https://www.facebook.com/gauri.tewari.71/","https://www.facebook.com/sibansh06","https://www.facebook.com/guru.narayana.549","https://www.facebook.com/harsh.jhawar.56","","https://www.facebook.com/jathin.badam","https://www.facebook.com/profile.php?id=100009444559809","https://www.facebook.com/maneesh.sarma","https://www.facebook.com/mrunalini.ramnath","https://www.facebook.com/profile.php?id=100009435031896","https://www.facebook.com/phanindra.ramineni.1","https://www.facebook.com/plava.kattamuri","https://www.facebook.com/prabhmeet.singh.1276","https://www.facebook.com/prathmesh.mahall","https://www.facebook.com/priyesh.mishra.125760","","https://www.facebook.com/reuben.george.3192","https://www.facebook.com/rishabhsingh3003","https://www.facebook.com/rithika.chavan.71020","https://www.facebook.com/rohan.pandaaa","https://www.facebook.com/RohitDwivedula","https://www.facebook.com/rudresh.singh.948","https://www.facebook.com/people/Sahil-Jain/100020524095679/","https://www.facebook.com/profile.php?id=100056693515442","https://www.facebook.com/shikharsrivastava23","https://www.facebook.com/shubhamsingla369","","https://www.facebook.com/Sriram.Kodey","https://www.facebook.com/sumanth.k.kotha","https://www.facebook.com/suraj.s2306/","https://www.facebook.com/tanay.ranjan.33/","https://www.facebook.com/sanjeev.thathapudi/","https://www.facebook.com/ujjwal.raizada","https://www.facebook.com/utkarsh.jain.5070","https://www.facebook.com/vibhumraj.tripathi","https://www.facebook.com/sirish.visweswar.31","https://www.facebook.com/profile.php?id=100010580742371","https://www.facebook.com/yugajmera"];

                var githubs = ["https://github.com/abdulazeem-tk4vr","https://github.com/AbijithYL","https://github.com/adeecc","https://github.com/arbaranwal","https://github.com/anvaishy","https://github.com/prasadboi","https://github.com/Arunabh17","","https://github.com/orgs/arc-bphc/people/Fraction36","","","https://www.github.com/JayDigvijay","https://github.com/divyekalra1","https://github.com/gauritewari","","https://github.com/guru-narayana","","https://github.com/TextZip?tab=followers","","https://github.com/SUNKenHERO","","","https://github.com/albegade-pavan","https://github.com/orgs/arc-bphc/people/phanindra-R","","","https://github.com/orgs/arc-bphc/people/pm-engr","https://github.com/priyesh0453","https://github.com/RajivDVK","https://github.com/ReubenGeorge02","https://github.com/orgs/arc-bphc/people/rishabsingh3003","https://github.com/ritz71020","https://github.com/pandaboi","","","https://github.com/hardhat5","https://github.com/sakshamssy","","https://github.com/shubham-333","","https://github.com/SriramKodey","","https://github.com/suraj-2306","https://github.com/tanayranjan","https://github.com/webisgood","https://github.com/ujjwal-raizada","https://github.com/Utkarsh0902","","","","https://github.com/YugAjmera"];

                var randomIndexUsed = [];
                var counter = 0;
                var numberOfPosts = 4;

                document.write('<div class="user">'); // added 
                while (counter < numberOfPosts)
                {
                    var randomIndex;
                    var email;
                    var name;
                    var photo;
                    var quote;
                    var facebook;
                    var github;

                    randomIndex = Math.floor(Math.random() * names.length);

                    if (randomIndexUsed.indexOf(randomIndex) == "-1")
                    {
                        email = emails[randomIndex];
                        name = names[randomIndex];
                        photo = photos[randomIndex];
                        quote = quotes[randomIndex];
                        facebook = facebooks[randomIndex];
                        github = githubs[randomIndex];

                        if (counter < numberOfPosts )
                        {
                            document.write('<div class="card">');
                            document.write('<img class="trailer" src="'+photo+'" alt="Avatar" height=250px ">');
                            document.write('<div class="container"><h3><b>'+ name + '</b></h3><p>'+ quote + '</p></div>');
                            document.write('<div class="header-icons-small"><a aria-label="Send email" href="mailto:'+ email +'"><i class="icon-small fa fa-envelope"></i></a><a aria-label="My Github" target="_blank" href="'+ github +'"><i class="icon-small fa fa-github-alt" aria-hidden="true"></i></a><a aria-label="My Facebook" target="_blank" href="'+ facebook +'"><i class="icon-small fa fa-facebook-square" aria-hidden="true"></i></a></div>');
                            document.write('</div>');
                            // document.write('<p><a href="' + postHREF + '">' + postTitle + '</a></p>');
                        }

                        randomIndexUsed.push(randomIndex);

                        counter++;
                    }
                }
                document.write('</div>')

            </script> */
}
