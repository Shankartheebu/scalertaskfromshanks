
        $(document).ready(function () {
            $('.navtabs .nav-item').click(function () {
                $('.nav-item').removeClass("active");
                $(this).addClass("active");
            });
        });

    
    
        $(document).ready(function(){
            $(".programbtn").click(function(){
                $(".program-content").show();
                $(".curriculam-content").hide();
                $(".teaching-content").hide();
                $(".teachingAssistants-content").hide();
                $(".entrancetest-content").hide();
                $(".mentors-content").hide();
                $(".placementsupport-content").hide();
                $(".tuitionfee-content").hide();
            })
        })

        $(document).ready(function(){
            $(".curriculumbtn").click(function(){
                $(".program-content").hide();
                $(".curriculam-content").show();
                $(".teaching-content").hide();
                $(".teachingAssistants-content").hide();
                $(".entrancetest-content").hide();
                $(".mentors-content").hide();
                $(".placementsupport-content").hide();
                $(".tuitionfee-content").hide();
            })
        })

        $(document).ready(function(){
            $(".teachingbtn").click(function(){
                $(".program-content").hide();
                $(".curriculam-content").hide();
                $(".teaching-content").show();
                $(".teachingAssistants-content").hide();
                $(".entrancetest-content").hide();
                $(".mentors-content").hide();
                $(".placementsupport-content").hide();
                $(".tuitionfee-content").hide();
            })
        })

        $(document).ready(function(){
            $(".teachingasstbtn").click(function(){
                $(".program-content").hide();
                $(".curriculam-content").hide();
                $(".teaching-content").hide();
                $(".teachingAssistants-content").show();
                $(".entrancetest-content").hide();
                $(".mentors-content").hide();
                $(".placementsupport-content").hide();
                $(".tuitionfee-content").hide();
            })
        })

        $(document).ready(function(){
            $(".entrancebtn").click(function(){
                $(".program-content").hide();
                $(".curriculam-content").hide();
                $(".teaching-content").hide();
                $(".teachingAssistants-content").hide();
                $(".entrancetest-content").show();
                $(".mentors-content").hide();
                $(".placementsupport-content").hide();
                $(".tuitionfee-content").hide();
            })
        })

        $(document).ready(function(){
            $(".mentorbtn").click(function(){
                $(".program-content").hide();
                $(".curriculam-content").hide();
                $(".teaching-content").hide();
                $(".teachingAssistants-content").hide();
                $(".entrancetest-content").hide();
                $(".mentors-content").show();
                $(".placementsupport-content").hide();
                $(".tuitionfee-content").hide();
            })
        })

        $(document).ready(function(){
            $(".placementbtn").click(function(){
                $(".program-content").hide();
                $(".curriculam-content").hide();
                $(".teaching-content").hide();
                $(".teachingAssistants-content").hide();
                $(".entrancetest-content").hide();
                $(".mentors-content").hide();
                $(".placementsupport-content").show();
                $(".tuitionfee-content").hide();
            })
        })

        $(document).ready(function(){
            $(".tuitionfeebtn").click(function(){
                $(".program-content").hide();
                $(".curriculam-content").hide();
                $(".teaching-content").hide();
                $(".teachingAssistants-content").hide();
                $(".entrancetest-content").hide();
                $(".mentors-content").hide();
                $(".placementsupport-content").hide();
                $(".tuitionfee-content").show();
            })
        })
    

        $(document).ready(function(){
            $(".mobprogrambtn").click(function(){
                $("#program-content").show();
                $("#navmobview").hide();
            })
        })

        
        $(document).ready(function(){
            $(".mobcurriculumbtn").click(function(){
                $("#curriculam-content").show();
                $("#navmobview").hide();
            })
        })

        $(document).ready(function(){
            $(".mobteachingbtn").click(function(){
                $("#teaching-content").show();
                $("#navmobview").hide();
            })
        })

        $(document).ready(function(){
            $(".mobteachingasstbtn").click(function(){
                $("#teachingAssistants-content").show();
                $("#navmobview").hide();
            })
        })

        $(document).ready(function(){
            $(".mobentrancebtn").click(function(){
                $("#entrancetest-content").show();
                $("#navmobview").hide();
            })
        })

        $(document).ready(function(){
            $(".mobmentorbtn").click(function(){
                $("#mentors-content").show();
                $("#navmobview").hide();
            })
        })

        $(document).ready(function(){
            $(".mobplacementbtn").click(function(){
                $("#placementsupport-content").show();
                $("#navmobview").hide();
            })
        })

        $(document).ready(function(){
            $(".mobtuitionfeebtn").click(function(){
                $("#tuitionfee-content").show();
                $("#navmobview").hide();
            })
        })

        function backbtn(){
            document.getElementById('program-content').style.display = 'none';
            document.getElementById('navmobview').style.display = 'block';
        }

        function backbtntwo(){
            document.getElementById('curriculam-content').style.display = 'none';
            document.getElementById('navmobview').style.display = 'block';
        }

        function backbtnthree(){
            document.getElementById('teaching-content').style.display = 'none';
            document.getElementById('navmobview').style.display = 'block';
        }

        function backbtnfour(){
            document.getElementById('teachingAssistants-content').style.display = 'none';
            document.getElementById('navmobview').style.display = 'block';
        }

        function backbtnfive(){
            document.getElementById('entrancetest-content').style.display = 'none';
            document.getElementById('navmobview').style.display = 'block';
        }

        function backbtnsix(){
            document.getElementById('mentors-content').style.display = 'none';
            document.getElementById('navmobview').style.display = 'block';
        }

        function backbtnseven(){
            document.getElementById('placementsupport-content').style.display = 'none';
            document.getElementById('navmobview').style.display = 'block';
        }

        function backbtneight(){
            document.getElementById('tuitionfee-content').style.display = 'none';
            document.getElementById('navmobview').style.display = 'block';
        }


        // rightpopup start
        jQuery(document).ready(function ($) {
            $('.Open_trigger').on('click', function (event) {
                event.preventDefault();
                $('#Open-modal-Id1').addClass('is-visible');
            });
            $('#Open-modal-Id1').on('click', function (event) {
                if ($(event.target).is('.popup_close') || $(event.target).is('#Open-modal-Id1')) {
                    event.preventDefault();
                    $(this).removeClass('is-visible');
                }
            });
            $(document).keyup(function (event) {
                if (event.which == '27') {
                    $('#Open-modal-Id1').removeClass('is-visible');
                }
            });
        });


        jQuery(document).ready(function ($) {
            $('.Open_trigger1').on('click', function (event) {
                event.preventDefault();
                $('#Open-modal-Id2').addClass('is-visible');
            });
            $('#Open-modal-Id2').on('click', function (event) {
                if ($(event.target).is('.popup_close') || $(event.target).is('#Open-modal-Id2')) {
                    event.preventDefault();
                    $(this).removeClass('is-visible');
                }
            });
            $(document).keyup(function (event) {
                if (event.which == '27') {
                    $('#Open-modal-Id2').removeClass('is-visible');
                }
            });
        });

        jQuery(document).ready(function ($) {
            $('#click-bottom-modal').on('click', function (event) {
                event.preventDefault();
                $('#Open-modal-Id3').addClass('is-visible');
            });
            $('#Open-modal-Id3').on('click', function (event) {
                if ($(event.target).is('.popup_close') || $(event.target).is('#Open-modal-Id3')) {
                    event.preventDefault();
                    $(this).removeClass('is-visible');
                }
            });
            $(document).keyup(function (event) {
                if (event.which == '27') {
                    $('#Open-modal-Id3').removeClass('is-visible');
                }
            });
        });
          