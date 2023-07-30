import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  console.log(getMongoURI(configService));
  return {
    uri: getMongoURI(configService),
    ...getMongoOptions(),
  };
};

const getMongoURI = (configService: ConfigService) =>
  configService.get('MONGO_URI');

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});
