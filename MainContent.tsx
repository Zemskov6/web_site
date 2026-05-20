import { Box } from '@mui/material';
import { bannerImages } from '../data/footballClubs';

function MainContent() {
  // Группируем изображения по их расположению
  const leftColumnImages = bannerImages.filter(img => 
    img.className === 'block1' || 
    img.className === 'block2-part1' || 
    img.className === 'block2-part2'
  );
  
  const rightColumnImages = bannerImages.filter(img => 
    img.className === 'block4' || 
    img.className === 'block5' || 
    img.className === 'block3'
  );

  const block1Image = leftColumnImages.find(img => img.className === 'block1');
  const block2Part1 = leftColumnImages.find(img => img.className === 'block2-part1');
  const block2Part2 = leftColumnImages.find(img => img.className === 'block2-part2');
  
  const rightImages = rightColumnImages;

  return (
    <Box
      sx={{
        display: 'flex',
        width: '90%',
        margin: '0 auto',
        height: { xs: 'auto', md: '600px' },
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {/* Левая колонка */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: '50%' },
        }}
      >
        {/* Блок 1 */}
        <Box
          component="div"
          sx={{
            overflow: 'hidden',
            height: { xs: '300px', md: '50%' },
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            },
          }}
        >
          <img src={block1Image?.img} alt={block1Image?.alt || 'Фото с футболом'} />
        </Box>
        
        {/* Контейнер для блоков 2.1 и 2.2 */}
        <Box
          sx={{
            display: 'flex',
            height: { xs: 'auto', md: '50%' },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            component="div"
            sx={{
              overflow: 'hidden',
              width: { xs: '100%', md: '50%' },
              height: { xs: '300px', md: '100%' },
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              },
            }}
          >
            <img src={block2Part1?.img} alt={block2Part1?.alt || 'Фото с футболом'} />
          </Box>
          <Box
            component="div"
            sx={{
              overflow: 'hidden',
              width: { xs: '100%', md: '50%' },
              height: { xs: '300px', md: '100%' },
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              },
            }}
          >
            <img src={block2Part2?.img} alt={block2Part2?.alt || 'Фото с футболом'} />
          </Box>
        </Box>
      </Box>

      {/* Правая колонка */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: '50%' },
        }}
      >
        {rightImages.map((image) => (
          <Box
            key={image.id}
            component="div"
            sx={{
              overflow: 'hidden',
              height: { xs: '200px', md: '33.333%' },
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              },
            }}
          >
            <img src={image.img} alt={image.alt} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default MainContent;