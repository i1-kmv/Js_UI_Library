import $ from './lib/lib';

// $('button').on('click', function() {
//     $('div').eq(1).toggleClass('active');
// });



// $('div').click(function() {
//     console.log($(this).index());
// });

//console.log($('div').eq(2).find('.some'));
//console.log($('.some').closest('.findme'));

//console.log($('.more').eq(0).siblings());

//$('button').fadeIn(2000);

$('#trigger').click(() => $('#trigger').createModal({
    text:{
      title: 'Modal title',
      body: 'Text body'
    },
    btns: {
      count: 2,
      settings: [
        [
          'Close',
          ['btn-danger', 'mr-10'],
          true
        ],
        [
          'Save changes',
          ['btn-succes'],
          false,
          () => {
            alert('Data saved' );
          }
        ]
      ]
    }
}));

